import React, { useEffect, useRef } from 'react';
import { useChatContext } from '../../context/ChatContext';
import TopBar from '../TopBar/TopBar';
import { Message, TypingIndicator } from '../Message/Message';
import InputBar from '../InputBar/InputBar';
import Welcome from '../Welcome/Welcome';
import './ChatArea.css';

function ChatArea() {
  const { activeChat, isGenerating, streamingContent } = useChatContext();
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  const messages = activeChat?.messages || [];
  const isEmpty = messages.length === 0 && !isGenerating;

  // Auto-scroll
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, streamingContent, isGenerating]);

  return (
    <main className="main">
      <TopBar />

      <div className="messages-container" ref={containerRef}>
        <div className="messages-inner">
          {isEmpty ? (
            <Welcome />
          ) : (
            <>
              {messages.map((msg, idx) => (
                <Message key={`${activeChat.id}-${idx}`} message={msg} />
              ))}

              {/* Streaming message */}
              {isGenerating && streamingContent && (
                <Message
                  message={{
                    role: 'assistant',
                    content: streamingContent,
                  }}
                  isStreaming
                />
              )}

              {/* Typing indicator (before content starts streaming) */}
              {isGenerating && !streamingContent && <TypingIndicator />}

              <div ref={bottomRef} />
            </>
          )}
        </div>
      </div>

      <InputBar />
    </main>
  );
}

export default ChatArea;
