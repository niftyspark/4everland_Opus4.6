import React from 'react';
import { useChatContext } from '../../context/ChatContext';
import './TopBar.css';

function TopBar() {
  const {
    activeChat,
    selectedModel,
    sidebarOpen,
    setSidebarOpen,
    isGenerating,
  } = useChatContext();

  return (
    <div className="topbar">
      <button
        className="toggle-sidebar-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        title="Toggle sidebar"
      >
        ☰
      </button>
      <span className="topbar-title">{activeChat?.title || 'New Chat'}</span>
      <span className="topbar-model">{selectedModel}</span>
      <div
        className={`status-dot ${isGenerating ? 'generating' : ''}`}
        title={isGenerating ? 'Generating...' : 'Connected'}
      />
    </div>
  );
}

export default TopBar;
