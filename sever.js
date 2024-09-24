const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

// Handling WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Receive a message and broadcast it
  socket.on('message', (msg) => {
    io.emit('message', msg); // Broadcast to all users
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
