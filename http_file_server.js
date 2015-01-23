// Learn You node tutorial
// Escercise #11

// http_file_server.js

// declaration section
var http = require('http');
var fs = require('fs');

// the first argument will be the port number and 
// the second argument will be the location of the file to be serve
var server = http.createServer(function(req, res){
  res.writeHead(200, {'content-type':'text/plain'});
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(process.argv[2]);
