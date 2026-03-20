import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useChatContext } from '../../context/ChatContext';
import './InputBar.css';

function InputBar() {
  const { sendMessage, stopGeneration, isGenerating } = useChatContext();
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef(null);

  const autoResize = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 150) + 'px';
  }, []);

  useEffect(() => {
    autoResize();
  }, [value, autoResize]);

  // Focus textarea when not generating
  useEffect(() => {
    if (!isGenerating && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isGenerating]);

  const handleSend = useCallback(() => {
    if (isGenerating) {
      stopGeneration();
      return;
    }
    if (!value.trim()) return;
    sendMessage(value);
    setValue('');
  }, [value, isGenerating, sendMessage, stopGeneration]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <div className="input-area">
      <div className={`input-wrapper ${focused ? 'focused' : ''}`}>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Send a message..."
          rows={1}
          disabled={isGenerating}
        />
        <button
          className={`send-btn ${isGenerating ? 'stop' : ''}`}
          onClick={handleSend}
          title={isGenerating ? 'Stop generation' : 'Send'}
          disabled={!isGenerating && !value.trim()}
        >
          {isGenerating ? '■' : '▶'}
        </button>
      </div>
      <div className="input-hint">
        Press <strong>Enter</strong> to send · <strong>Shift+Enter</strong> for
        new line · Powered by 4EVERLAND
      </div>
    </div>
  );
}

export default InputBar;
