(function() {
  'use strict';

  var form   = document.querySelector('.form'),
      input  = form.querySelector('.msg'),
      msgs   = document.querySelector('.msgs'),
      socket = io.connect(window.location.host + '/pillowTalk'),
      sendMessage,
      receiveMessage,
      receiveAlert,
      printMsg;

  printMsg = function printMsg(msg) {
    var ele = document.createElement('ul');
    ele.innerText = msg;
    msgs.appendChild(ele);
  };

  sendMessage = function() {
    var msg = input.value,
        successCB;

    successCB = function() {
      console.log('Message successfully sent');
    };

    socket.emit('message', msg, successCB);
    printMsg('You: ' + msg);
    input.value = '';
    event.preventDefault();
  };


  receiveMessage = function(msg) { printMsg('Them: ', msg); };
  receiveAlert   = function(msg) { printMsg(msg); };

  form.addEventListener('submit', sendMessage);
  socket.addEventListener('message', receiveMessage);
  socket.addEventListener('alert', receiveAlert);
}());
