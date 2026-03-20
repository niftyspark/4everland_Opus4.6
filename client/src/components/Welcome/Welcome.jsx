import React from 'react';
import { useChatContext } from '../../context/ChatContext';
import './Welcome.css';

const SUGGESTIONS = [
  {
    emoji: '🔬',
    text: 'Explain quantum computing in simple terms',
  },
  {
    emoji: '🐍',
    text: 'Write a Python function to find prime numbers',
  },
  {
    emoji: '🌐',
    text: 'What are the best practices for REST API design?',
  },
  {
    emoji: '🚀',
    text: 'Help me write a creative short story about space exploration',
  },
];

function Welcome() {
  const { sendMessage } = useChatContext();

  return (
    <div className="welcome">
      <div className="welcome-icon">⚡</div>
      <h1>4EVERLAND AI Chat</h1>
      <p>
        Fast, decentralized AI inference powered by 4EVERLAND. Choose a model
        and start chatting.
      </p>
      <div className="suggestions">
        {SUGGESTIONS.map((s, i) => (
          <div
            key={i}
            className="suggestion-card"
            onClick={() => sendMessage(s.text)}
          >
            <span className="suggestion-emoji">{s.emoji}</span>
            {s.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
