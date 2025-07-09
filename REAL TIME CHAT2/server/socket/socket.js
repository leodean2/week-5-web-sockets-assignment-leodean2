const { Server } = require('socket.io');
const { setupEventHandlers } = require('../controllers/socketController');

module.exports.setupSocket = (server, config) => {
  const io = new Server(server, {
    cors: {
      origin: config.CLIENT_URL,
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);
    setupEventHandlers(socket, io);
  });

  return io;
};