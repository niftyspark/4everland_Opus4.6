import { useCallback } from 'react';
import { useChatContext } from '../context/ChatContext';

/**
 * Convenience hook for components that just need send/stop actions.
 */
export function useChat() {
  const {
    sendMessage,
    stopGeneration,
    isGenerating,
    activeChat,
    streamingContent,
  } = useChatContext();

  const send = useCallback(
    (content) => {
      sendMessage(content);
    },
    [sendMessage]
  );

  const stop = useCallback(() => {
    stopGeneration();
  }, [stopGeneration]);

  return {
    send,
    stop,
    isGenerating,
    messages: activeChat?.messages || [],
    streamingContent,
  };
}
