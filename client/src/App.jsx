import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import ChatArea from './components/ChatArea/ChatArea';
import Toast from './components/Toast/Toast';
import { useChatContext } from './context/ChatContext';

function App() {
  const { sidebarOpen, setSidebarOpen } = useChatContext();

  return (
    <div className="app" style={{ display: 'flex', height: '100vh' }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 999,
            backdropFilter: 'blur(4px)',
          }}
        />
      )}
      <Sidebar />
      <ChatArea />
      <Toast />
    </div>
  );
}

export default App;
