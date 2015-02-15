var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});
app.get('/main.js', function(req, res){
  res.sendFile(__dirname + '/client/main.js');
});

io.on('connection', function(socket) {
  io.emit('chat message', 'User connected');

  socket.on('chat message', function(msg) {
    socket.broadcast.emit('chat message', msg);
    socket.emit('message success', msg);
  });

  socket.on('disconnect', function() {
    io.emit('chat message', 'User disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
