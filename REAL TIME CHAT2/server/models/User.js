class User {
  constructor() {
    this.users = new Map(); // socket.id -> user data
  }

  addUser(socketId, userData) {
    this.users.set(socketId, userData);
    return this.getAllUsers();
  }

  removeUser(socketId) {
    this.users.delete(socketId);
    return this.getAllUsers();
  }

  getUser(socketId) {
    return this.users.get(socketId);
  }

  getAllUsers() {
    return Array.from(this.users.values());
  }
}

module.exports = new User();