import { useState, useEffect } from 'react';

export const useMessages = (socket) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const receiveMessage = (message) => {
      setMessages((prev) => [...prev, message]);
    };

    socket.on('receiveMessage', receiveMessage);

    return () => {
      socket.off('receiveMessage', receiveMessage);
    };
  }, [socket]);

  const sendMessage = (message) => {
    if (socket && message.trim()) {
      socket.emit('sendMessage', message);
    }
  };

  return { messages, sendMessage };
};