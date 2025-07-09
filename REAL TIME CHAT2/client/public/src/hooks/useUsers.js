import { useState, useEffect } from 'react';

export const useUsers = (socket) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const updateUserList = (userList) => {
      setUsers(userList);
    };

    socket.on('userList', updateUserList);

    return () => {
      socket.off('userList', updateUserList);
    };
  }, [socket]);

  return { users };
};