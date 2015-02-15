var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/time', function(req, res) {
  res.send(
    'It is ' + new Date().toGMTString() + '!'
  );
});

io.on('connection', function(socket) {
  io.emit('chat message', 'User connected');

  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function() {
    io.emit('chat message', 'User disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
