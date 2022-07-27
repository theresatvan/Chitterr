const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

// Initializing socket
const io = socketio(server);

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`App is live on port ${PORT}`));

