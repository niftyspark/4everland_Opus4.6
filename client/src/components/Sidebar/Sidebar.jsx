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
    toolsCount,
  } = useChatContext();
  
  const [activeTab, setActiveTab] = React.useState('chats'); // 'chats' or 'system'

  const handleChatClick = (chatId) => {
    setActiveChatId(chatId);
  };

  return (
    <aside className={`sidebar glass ${sidebarOpen ? '' : 'collapsed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-glow" />
          <span className="logo-text">4EVERLAND</span>
        </div>
      </div>

      <div className="sidebar-tabs">
        <button 
          className={`tab-btn ${activeTab === 'chats' ? 'active' : ''}`}
          onClick={() => setActiveTab('chats')}
        >
          Chats
        </button>
        <button 
          className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
          onClick={() => setActiveTab('system')}
        >
          System
        </button>
      </div>

      {activeTab === 'chats' ? (
        <>
          <button className="new-chat-btn" onClick={createNewChat}>
            New Experience
          </button>

          <div className="chat-list">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`chat-item ${chat.id === activeChatId ? 'active' : ''}`}
                onClick={() => handleChatClick(chat.id)}
              >
                <div className="active-indicator" />
                <span className="chat-title">{chat.title}</span>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChat(chat.id);
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="system-prompt-tab">
           <ModelSettings />
        </div>
      )}

      {toolsCount > 0 && activeTab === 'chats' && (
        <div className="tools-badge">
          <div className="pulse-dot" />
          {toolsCount} Connected Tools
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
