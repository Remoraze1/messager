const socket = io();

// Send message
document.getElementById('send-button').addEventListener('click', () => {
  const message = document.getElementById('message-input').value;
  socket.emit('message', message);  // Emit message to the server
  document.getElementById('message-input').value = ''; // Clear input
});

// Receive messages
socket.on('message', (msg) => {
  const messageContainer = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  messageContainer.appendChild(messageElement);
});
