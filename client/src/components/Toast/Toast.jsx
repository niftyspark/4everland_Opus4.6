import React from 'react';
import { useChatContext } from '../../context/ChatContext';
import './Toast.css';

function Toast() {
  const { toasts, removeToast } = useChatContext();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          <span className="toast-icon">
            {toast.type === 'error' ? '⚠️' : '✅'}
          </span>
          <span className="toast-message">{toast.message}</span>
          <button
            className="toast-close"
            onClick={() => removeToast(toast.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default Toast;
