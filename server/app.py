import os
import json
import requests
from flask import Flask, request, jsonify, Response, stream_with_context, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder="../client/dist", static_url_path="/")
CORS(app, resources={r"/api/*": {"origins": "*"}})

API_BASE = "https://ai.api.4everland.org/api/v1"
API_KEY = os.getenv("FOUREVERLAND_API_KEY", "")

COMPOSIO_API_BASE = "https://backend.composio.dev/api/v3"
COMPOSIO_API_KEY = os.getenv("COMPOSIO_API_KEY", "")
COMPOSIO_USER_ID = os.getenv("COMPOSIO_USER_ID", "local-user")

SUPPORTED_MODELS = [
    "anthropic/claude-opus-4.6",
    "anthropic/claude-sonnet-4.6",
    "z-ai/glm-5-turbo",
    "x-ai/grok-4.20-multi-agent-beta",
]

DEFAULT_MODEL = "z-ai/glm-5-turbo"


def clamp(value, min_val, max_val):
    if value is None:
        return None
    return max(min_val, min(max_val, value))


def fetch_composio_tools():
    """Fetch tools from Composio and convert them to OpenAI format."""
    if not COMPOSIO_API_KEY or COMPOSIO_API_KEY == "your_composio_api_key_here":
        return []

    try:
        headers = {"x-api-key": COMPOSIO_API_KEY}
        # Fetch important tools to avoid overwhelming the model
        resp = requests.get(f"{COMPOSIO_API_BASE}/tools?important=true",
                            headers=headers,
                            timeout=10)
        resp.raise_for_status()
        tools_data = resp.json().get("items", [])

        openai_tools = []
        for tool in tools_data:
            openai_tools.append({
                "type": "function",
                "function": {
                    "name": tool["name"],
                    "description": tool["description"],
                    "parameters": tool["parameters"]
                }
            })
        return openai_tools
    except Exception as e:
        print(f"❌ Error fetching Composio tools: {e}")
        return []


def execute_composio_tool(action_name, arguments):
    """Execute a tool using Composio REST API."""
    try:
        headers = {
            "x-api-key": COMPOSIO_API_KEY,
            "Content-Type": "application/json"
        }
        payload = {"user_id": COMPOSIO_USER_ID, "parameters": arguments}
        # Composio actions are often named as app_action
        # We need the action ID. For now, assuming action_name is the ID or we can find it.
        # Typically, the name used in OpenAI format is the action ID or name.
        resp = requests.post(f"{COMPOSIO_API_BASE}/actions/{action_name}/execute",
                             headers=headers,
                             json=payload,
                             timeout=30)
        resp.raise_for_status()
        return resp.json()
    except Exception as e:
        print(f"❌ Error executing Composio tool {action_name}: {e}")
        return {"error": str(e)}


@app.route("/api/models", methods=["GET"])
def get_models():
    return jsonify({"models": SUPPORTED_MODELS, "default": DEFAULT_MODEL})


@app.route("/api/tools", methods=["GET"])
def get_tools():
    tools = fetch_composio_tools()
    return jsonify({"tools": tools, "count": len(tools)})


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON body"}), 400

    messages = data.get("messages", [])
    model = data.get("model", DEFAULT_MODEL)
    stream = data.get("stream", False)
    temperature = data.get("temperature", 0.7)
    max_tokens = data.get("max_tokens", 4096)

    if model not in SUPPORTED_MODELS:
        return jsonify({
            "error": f"Unsupported model: {model}",
            "supported": SUPPORTED_MODELS
        }), 400

    if not messages or not isinstance(messages, list):
        return jsonify({"error": "messages must be a non-empty array"}), 400

    for msg in messages:
        if msg.get("role") not in ("system", "user", "assistant", "tool"):
            return jsonify({"error": f"Invalid role: {msg.get('role')}"}), 400
        if not isinstance(msg.get("content", ""), str):
            return jsonify({"error": "Message content must be a string"}), 400

    temperature = clamp(temperature, 0, 2)
    max_tokens = clamp(max_tokens, 1, 100000)

    # Fetch tools from Composio
    tools = fetch_composio_tools()

    payload = {
        "model": model,
        "messages": messages,
        "temperature": temperature,
        "max_tokens": max_tokens,
        "stream": stream,
    }
    if tools:
        payload["tools"] = tools
        # Force non-streaming when tools are present to ensure the tool-call loop works
        return iterate_chat_completion(headers, payload)

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://4everland-chatbot.app",
        "X-Title": "4EVERLAND AI Chatbot",
    }

    if stream:
        return Response(
            stream_with_context(_stream_response(headers, payload)),
            content_type="text/event-stream",
            headers={
                "Cache-Control": "no-cache",
                "X-Accel-Buffering": "no",
                "Connection": "keep-alive",
            }
        )
    else:
        return iterate_chat_completion(headers, payload)


def iterate_chat_completion(headers, payload, max_iterations=5):
    """Handle the iterative loop for tool calling."""
    current_payload = payload.copy()
    
    for _ in range(max_iterations):
        try:
            resp = requests.post(
                f"{API_BASE}/chat/completions",
                headers=headers,
                json=current_payload,
                timeout=120,
            )
            resp.raise_for_status()
            resp_json = resp.json()
            message = resp_json["choices"][0]["message"]

            if not message.get("tool_calls"):
                return jsonify(resp_json)

            # Handle tool calls
            current_payload["messages"].append(message)
            for tool_call in message["tool_calls"]:
                tool_name = tool_call["function"]["name"]
                tool_args = json.loads(tool_call["function"]["arguments"])
                
                print(f"🛠️ Executing tool: {tool_name} with args: {tool_args}")
                result = execute_composio_tool(tool_name, tool_args)
                
                current_payload["messages"].append({
                    "role": "tool",
                    "tool_call_id": tool_call["id"],
                    "content": json.dumps(result)
                })
            
            # Continue the loop with updated messages
        except requests.exceptions.Timeout:
            return jsonify({"error": "Request timed out"}), 504
        except requests.exceptions.HTTPError as e:
            return jsonify({
                "error": f"API error: {e.response.status_code}",
                "detail": e.response.text
            }), 502
        except Exception as e:
            return jsonify({"error": str(e)}), 500
            
    return jsonify({"error": "Max tool call iterations reached"}), 500


def _stream_response(headers, payload):
    try:
        with requests.post(
            f"{API_BASE}/chat/completions",
            headers=headers,
            json=payload,
            stream=True,
            timeout=120,
        ) as resp:
            resp.raise_for_status()
            for line in resp.iter_lines(decode_unicode=True):
                if line:
                    yield f"{line}\n\n"
            yield "data: [DONE]\n\n"
    except Exception as e:
        error_data = json.dumps({"error": str(e)})
        yield f"data: {error_data}\n\n"


if __name__ == "__main__":
    if not API_KEY:
        print("⚠️  WARNING: FOUREVERLAND_API_KEY is not set in .env!")
    if not COMPOSIO_API_KEY or COMPOSIO_API_KEY == "your_composio_api_key_here":
        print("💡 TIP: Set COMPOSIO_API_KEY in .env to enable 250+ tools!")
    
    port = int(os.environ.get("PORT", 7860))
    print(f"🚀 4EVERLAND API server running at http://0.0.0.0:{port}")
    app.run(debug=False, host="0.0.0.0", port=port)
