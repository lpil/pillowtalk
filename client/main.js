(function() {
  var form   = document.querySelector('.form'),
      input  = form.querySelector('.msg'),
      msgs   = document.querySelector('.msgs'),
      socket = io(),
      sendCB,
      receiveCB,
      successCB,
      printMsg;

  printMsg = function printMsg(handle, msg) {
    var ele = document.createElement('ul');
    ele.innerText = handle + ': ' + msg;
    msgs.appendChild(ele);
  };

  sendCB = function() {
    var msg = input.value;
    socket.emit('chat message', msg);
    printMsg('You', msg);
    input.value = '';
    event.preventDefault();
  };

  receiveCB = function(msg) { printMsg('Them', msg); };

  successCB = function(msg) {
    console.log('Message successfully sent: '+ msg);
  };

  form.addEventListener('submit', sendCB, false);
  socket.addEventListener('chat message', receiveCB, false);
  socket.addEventListener('message success', successCB, false);
}());
