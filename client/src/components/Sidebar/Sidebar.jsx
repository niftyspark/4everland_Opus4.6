import React from 'react';
import { useChatContext } from '../../context/ChatContext';
import ModelSettings from '../ModelSettings/ModelSettings';
import './Sidebar.css';

function Sidebar() {
  const {
    chats,
    activeChatId,
    setActiveChatId,
    createNewChat,
    deleteChat,
    sidebarOpen,
    setSidebarOpen,
    toolsCount,
  } = useChatContext();

  const handleChatClick = (chatId) => {
    setActiveChatId(chatId);
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const handleDelete = (e, chatId) => {
    e.stopPropagation();
    deleteChat(chatId);
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <span className="logo-text">4EVERLAND AI</span>
        </div>
      </div>

      <button className="new-chat-btn" onClick={createNewChat}>
        <span>＋</span> New Chat
      </button>

      {toolsCount > 0 && (
        <div className="tools-status">
          <span className="tools-icon">🛠️</span>
          <span className="tools-text">{toolsCount} Composio Tools Active</span>
        </div>
      )}

      <div className="chat-list">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${chat.id === activeChatId ? 'active' : ''}`}
            onClick={() => handleChatClick(chat.id)}
          >
            <span className="chat-icon">💬</span>
            <span className="chat-title">{chat.title}</span>
            <button
              className="delete-btn"
              onClick={(e) => handleDelete(e, chat.id)}
              title="Delete"
            >
              🗑
            </button>
          </div>
        ))}
      </div>

      <ModelSettings />
    </aside>
  );
}

export default Sidebar;
