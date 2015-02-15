(function() {
  var form   = document.querySelector('.form'),
      input  = form.querySelector('.msg'),
      msgs   = document.querySelector('.msgs'),
      socket = io(),
      sendCB,
      receiveCB;

  sendCB = function() {
    socket.emit('chat message', input.value);
    input.value = '';
    event.preventDefault();
  };

  receiveCB = function(msg) {
    var ele = document.createElement('ul');
    ele.innerText = msg;
    msgs.appendChild(ele);
  };

  form.addEventListener('submit', sendCB, false);
  socket.addEventListener('chat message', receiveCB, false);
}());
