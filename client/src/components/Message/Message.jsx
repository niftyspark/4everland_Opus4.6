import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { formatTime } from '../../utils/helpers';
import './Message.css';

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <button className="copy-code-btn" onClick={handleCopy}>
      {copied ? '✓ Copied!' : 'Copy'}
    </button>
  );
}

function CodeBlock({ className, children }) {
  const match = /language-(\w+)/.exec(className || '');
  const lang = match ? match[1] : '';
  const code = String(children).replace(/\n$/, '');

  if (!match) {
    return <code className={className}>{children}</code>;
  }

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-block-lang">{lang}</span>
        <CopyButton code={code} />
      </div>
      <SyntaxHighlighter
        style={oneDark}
        language={lang}
        PreTag="pre"
        customStyle={{
          margin: 0,
          borderRadius: 0,
          background: '#0a0a0f',
          fontSize: '0.83rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function Message({ message, isStreaming = false }) {
  const { role, content, timestamp } = message;
  const isUser = role === 'user';

  return (
    <div className={`message ${role}`}>
      <div className="message-avatar">{isUser ? '👤' : '⚡'}</div>
      <div className="message-content">
        <div className="message-bubble">
          {isUser ? (
            <p>{content}</p>
          ) : (
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  if (inline) {
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                  return <CodeBlock className={className}>{children}</CodeBlock>;
                },
              }}
            >
              {content}
            </ReactMarkdown>
          )}
          {isStreaming && <span className="streaming-cursor" />}
        </div>
        {timestamp && <div className="message-time">{formatTime(timestamp)}</div>}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="message assistant">
      <div className="message-avatar">⚡</div>
      <div className="message-content">
        <div className="message-bubble">
          <div className="typing-indicator">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Message, TypingIndicator };
export default Message;
