'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});
app.get('/main.js', function(req, res){
  res.sendFile(__dirname + '/client/main.js');
});

io.of('/pillowTalk')
  .on('connection', function(socket) {
  io.emit('alert', 'User connected');

  socket.on('message', function(msg, successCB) {
    socket.broadcast.emit('message', msg);
    if (successCB) { successCB(); }
  });

  socket.on('disconnect', function() {
    io.emit('alert', 'User disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
