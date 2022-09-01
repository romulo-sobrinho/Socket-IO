require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const socketIO = require('socket.io');

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
})

const io = socketIO(server);

io.on('connection', (socket) =>{
  console.log('New connection');

  socket.emit('Hello', {message: "Seja bem vindo!"});

  socket.on('hello_client_response', (data) => {
    console.log(data.message);
  })
})