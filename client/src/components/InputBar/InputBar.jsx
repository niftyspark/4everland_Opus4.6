import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useChatContext } from '../../context/ChatContext';
import './InputBar.css';

function InputBar() {
  const { sendMessage, stopGeneration, isGenerating } = useChatContext();
  const [value, setValue] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const autoResize = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 150)}px`;
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
    if (!value.trim() && attachments.length === 0) return;
    
    // Combine text and attachments for sendMessage
    sendMessage(value, attachments);
    
    setValue('');
    setAttachments([]);
  }, [value, attachments, isGenerating, sendMessage, stopGeneration]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const onFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAttachments(prev => [...prev, {
          name: file.name,
          type: file.type,
          data: ev.target.result // base64
        }]);
      };
      reader.readAsDataURL(file);
    });
    
    // Clear input
    e.target.value = '';
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="input-area glass">
      {attachments.length > 0 && (
        <div className="attachments-preview">
          {attachments.map((file, idx) => (
            <div key={idx} className="attachment-item">
              {file.type.startsWith('image/') ? (
                <img src={file.data} alt="preview" />
              ) : (
                <div className="file-box">📄 {file.name}</div>
              )}
              <button className="remove-btn" onClick={() => removeAttachment(idx)}>×</button>
            </div>
          ))}
        </div>
      )}
      
      <div className={`input-wrapper ${focused ? 'focused' : ''}`}>
        <button 
          className="attach-btn" 
          onClick={() => fileInputRef.current.click()}
          title="Upload file or image"
        >
          📎
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          multiple 
          onChange={onFileChange}
          accept="image/*,application/pdf,text/*"
        />
        
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Message 4EVERLAND..."
          rows={1}
          disabled={isGenerating}
        />
        <button
          className={`send-btn ${isGenerating ? 'stop' : ''}`}
          onClick={handleSend}
          title={isGenerating ? 'Stop generation' : 'Send'}
          disabled={!isGenerating && !value.trim() && attachments.length === 0}
        >
          {isGenerating ? '■' : '↑'}
        </button>
      </div>
      <div className="input-hint">
        Premium AI Experience · Multimodal Enabled
      </div>
    </div>
  );
}

export default InputBar;
