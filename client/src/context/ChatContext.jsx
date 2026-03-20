import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { generateId, truncate } from '../utils/helpers';
import { fetchModels as apiFetchModels, sendChatMessage, parseSSEStream, sendNonStreaming } from '../services/api';

const ChatContext = createContext(null);

const SYSTEM_PROMPT = {
  role: 'system',
  content:
    'You are a helpful, intelligent AI assistant powered by 4EVERLAND decentralized infrastructure. You provide clear, accurate, and well-structured responses. Use markdown formatting when appropriate.',
};

const STORAGE_KEY = '4everland_chats';

function loadChats() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveChats(chats) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  } catch {
    // ignore
  }
}

export function ChatProvider({ children }) {
  const [chats, setChats] = useState(() => loadChats());
  const [activeChatId, setActiveChatId] = useState(null);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('z-ai/glm-5-turbo');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(4096);
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toasts, setToasts] = useState([]);

  const abortControllerRef = useRef(null);

  // Persist chats
  useEffect(() => {
    saveChats(chats);
  }, [chats]);

  // Load models
  useEffect(() => {
    apiFetchModels()
      .then((data) => {
        setModels(data.models);
        setSelectedModel(data.default);
      })
      .catch(() => {
        setModels([
          'anthropic/claude-opus-4.6',
          'anthropic/claude-sonnet-4.6',
          'z-ai/glm-5-turbo',
          'x-ai/grok-4.20-multi-agent-beta',
        ]);
      });
  }, []);

  // Auto create first chat
  useEffect(() => {
    if (chats.length === 0) {
      createNewChat();
    } else if (!activeChatId) {
      setActiveChatId(chats[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToast = useCallback((message, type = 'error') => {
    const id = generateId();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const activeChat = chats.find((c) => c.id === activeChatId) || null;

  const createNewChat = useCallback(() => {
    const chat = {
      id: generateId(),
      title: 'New Chat',
      messages: [],
      createdAt: Date.now(),
    };
    setChats((prev) => [chat, ...prev]);
    setActiveChatId(chat.id);
    return chat;
  }, []);

  const deleteChat = useCallback(
    (chatId) => {
      setChats((prev) => {
        const next = prev.filter((c) => c.id !== chatId);
        if (activeChatId === chatId) {
          if (next.length > 0) {
            setActiveChatId(next[0].id);
          } else {
            // Will trigger new chat creation via effect
            const newChat = {
              id: generateId(),
              title: 'New Chat',
              messages: [],
              createdAt: Date.now(),
            };
            setActiveChatId(newChat.id);
            return [newChat];
          }
        }
        return next;
      });
    },
    [activeChatId]
  );

  const updateChatMessages = useCallback((chatId, messages) => {
    setChats((prev) =>
      prev.map((c) => {
        if (c.id !== chatId) return c;
        const firstUser = messages.find((m) => m.role === 'user');
        const title = firstUser ? truncate(firstUser.content, 40) : c.title;
        return { ...c, messages, title };
      })
    );
  }, []);

  const sendMessage = useCallback(
    async (content) => {
      if (!content.trim() || isGenerating) return;

      let chat = activeChat;
      if (!chat) {
        chat = createNewChat();
      }

      const userMessage = {
        role: 'user',
        content: content.trim(),
        timestamp: Date.now(),
      };

      const newMessages = [...chat.messages, userMessage];
      updateChatMessages(chat.id, newMessages);

      setIsGenerating(true);
      setStreamingContent('');

      const apiMessages = [
        SYSTEM_PROMPT,
        ...newMessages.map((m) => ({ role: m.role, content: m.content })),
      ];

      abortControllerRef.current = new AbortController();

      try {
        const response = await sendChatMessage({
          messages: apiMessages,
          model: selectedModel,
          temperature,
          maxTokens,
          stream: true,
          signal: abortControllerRef.current.signal,
        });

        let resolved = false;

        await new Promise((resolve, reject) => {
          parseSSEStream(
            response,
            (fullContent) => {
              setStreamingContent(fullContent);
            },
            (finalContent) => {
              if (resolved) return;
              resolved = true;

              if (finalContent) {
                const assistantMsg = {
                  role: 'assistant',
                  content: finalContent,
                  timestamp: Date.now(),
                };
                setChats((prev) =>
                  prev.map((c) => {
                    if (c.id !== chat.id) return c;
                    const msgs = [...newMessages, assistantMsg];
                    const firstUser = msgs.find((m) => m.role === 'user');
                    return {
                      ...c,
                      messages: msgs,
                      title: firstUser ? truncate(firstUser.content, 40) : c.title,
                    };
                  })
                );
              }
              setStreamingContent('');
              setIsGenerating(false);
              resolve();
            },
            async (error) => {
              if (resolved) return;
              resolved = true;

              // Fallback to non-streaming
              try {
                const fallbackContent = await sendNonStreaming({
                  messages: apiMessages,
                  model: selectedModel,
                  temperature,
                  maxTokens,
                });

                const assistantMsg = {
                  role: 'assistant',
                  content: fallbackContent || 'No response received.',
                  timestamp: Date.now(),
                };

                setChats((prev) =>
                  prev.map((c) => {
                    if (c.id !== chat.id) return c;
                    const msgs = [...newMessages, assistantMsg];
                    const firstUser = msgs.find((m) => m.role === 'user');
                    return {
                      ...c,
                      messages: msgs,
                      title: firstUser ? truncate(firstUser.content, 40) : c.title,
                    };
                  })
                );
              } catch (fallbackErr) {
                addToast(`Error: ${fallbackErr.message}`, 'error');
              }

              setStreamingContent('');
              setIsGenerating(false);
              resolve();
            }
          );
        });
      } catch (err) {
        if (err.name === 'AbortError') {
          addToast('Generation stopped', 'success');

          // Save partial content if exists
          setStreamingContent((prev) => {
            if (prev) {
              const assistantMsg = {
                role: 'assistant',
                content: prev + '\n\n*[Generation stopped]*',
                timestamp: Date.now(),
              };
              setChats((prevChats) =>
                prevChats.map((c) => {
                  if (c.id !== chat.id) return c;
                  const msgs = [...newMessages, assistantMsg];
                  const firstUser = msgs.find((m) => m.role === 'user');
                  return {
                    ...c,
                    messages: msgs,
                    title: firstUser ? truncate(firstUser.content, 40) : c.title,
                  };
                })
              );
            }
            return '';
          });
        } else {
          addToast(`Error: ${err.message}`, 'error');
        }

        setStreamingContent('');
        setIsGenerating(false);
      }
    },
    [
      activeChat,
      createNewChat,
      updateChatMessages,
      isGenerating,
      selectedModel,
      temperature,
      maxTokens,
      addToast,
    ]
  );

  const stopGeneration = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  const value = {
    chats,
    activeChatId,
    setActiveChatId,
    activeChat,
    models,
    selectedModel,
    setSelectedModel,
    temperature,
    setTemperature,
    maxTokens,
    setMaxTokens,
    isGenerating,
    streamingContent,
    sidebarOpen,
    setSidebarOpen,
    toasts,
    addToast,
    removeToast,
    createNewChat,
    deleteChat,
    sendMessage,
    stopGeneration,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatContext must be used within ChatProvider');
  return ctx;
}
