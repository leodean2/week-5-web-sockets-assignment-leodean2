require('dotenv').config();
const express = require('express');
const http = require('http');
const { setupSocket } = require('./socket/socket');
const { initializeConfig } = require('./config/config');

const app = express();
const server = http.createServer(app);

// Initialize configuration
const config = initializeConfig();

// Setup Socket.io
setupSocket(server, config);

// Start server
server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});