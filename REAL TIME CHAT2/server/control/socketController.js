const User = require('../models/User');

module.exports.setupEventHandlers = (socket, io) => {
  const { registerUser, disconnectUser } = require('./userController');
  const { handleMessage } = require('./messageController');
  const { handleRoomEvents } = require('./roomController');

  // User events
  socket.on('register', (username) => registerUser(socket, io, username));
  socket.on('disconnect', () => disconnectUser(socket, io));

  // Message events
  socket.on('sendMessage', (data) => handleMessage(socket, io, data));
  
  // Room events
  socket.on('joinRoom', (room) => handleRoomEvents.joinRoom(socket, io, room));
  socket.on('leaveRoom', (room) => handleRoomEvents.leaveRoom(socket, io, room));
};