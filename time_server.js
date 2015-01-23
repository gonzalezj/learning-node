// Learn you node tutorial
// Excercise #10

// time_server.js

// declaration section
var net = require('net');
var server;

function pad(n) {
  return n < 10 ? '0' + n : n
}

server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
  + pad(d.getMonth() + 1) + "-"
  + pad(d.getDate()) + " "
  + pad(d.getHours()) + ":"
  + pad(d.getMinutes()) + "\n";
  socket.end(s);
});

server.listen(process.argv[2]);
