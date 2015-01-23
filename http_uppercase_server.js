// Learn you node tutorial
// Excercise #12

// http_upper_case_server.js

// declaration section
var http = require('http');
var map = require('through2-map');

// incoming message will be convert into uppercase
uppercase = map(function(chunk){
  return chunk.toString().toUpperCase();
});

// server will send the response back only if the method's type is POST
server = http.createServer(function(req, res){
  if(req.method == 'POST'){
    req.pipe(uppercase).pipe(res);
  }
});
server.listen(process.argv[2]);
