# Real-Time Chat Application with Socket.io
A full-featured real-time chat application built with React, Node.js, and Socket.io, featuring private messaging, chat rooms, and real-time notifications.

## Features

- **Real-time messaging** with instant delivery
- **User authentication** (username-based)
- **Online status** indicators
- **Typing indicators** when users are composing messages
- **Private messaging** between users
- **Multiple chat rooms** with join/leave functionality
- **File sharing** support (images and documents)
- **Real-time notifications** with sound alerts
- **Responsive design** works on desktop and mobile

## Project Structure

```
socketio-chat/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # UI components
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── socket/         # Socket.io client setup
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Node.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Socket event handlers
│   ├── models/             # Data models
│   ├── socket/             # Socket.io server setup
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Technologies Used

- **Frontend**:
  - React.js
  - Socket.io-client
  - React Router
  - Context API for state management
  - Custom hooks

- **Backend**:
  - Node.js
  - Express.js
  - Socket.io
  - Event-driven architecture

## Installation

### Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/socketio-chat.git
   cd socketio-chat
   ```
2. **Set up the server:
   ```bash
   cd server
   npm install
   cp .env.example .env  # Update the .env file with your configuration
   ```
3. **Set up the client:
   ```bash
    cd ../client
   npm install
   cp .env.example .env  # Update the .env file with your configuration
   ```
 4. **Start the development servers:
    ```bash
    # In one terminal (server directory)
     npm run dev

    # In another terminal (client directory)
    npm start
    ```
## The application should now be running:

- Backend: http://localhost:4000

- Frontend: http://localhost:3000



