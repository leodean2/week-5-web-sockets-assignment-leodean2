import { useState, useEffect } from 'react';
import { useSocket } from '../context/SocketContext';
import ChatContainer from '../components/ChatContainer';
import OnlineUsers from '../components/OnlineUsers';

const ChatPage = () => {
  const { socket, isConnected } = useSocket();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!socket || !isConnected) return;

    socket.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on('userList', (userList) => {
      setUsers(userList);
    });

    return () => {
      socket.off('receiveMessage');
      socket.off('userList');
    };
  }, [socket, isConnected]);

  return (
    <div className="chat-page">
      <OnlineUsers users={users} />
      <ChatContainer messages={messages} />
    </div>
  );
};

export default ChatPage;