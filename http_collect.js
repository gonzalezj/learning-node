// Learn you node tutorial
// Excercise #8

// http_collect.js

// declaration section
var http = require('http');

http.get(process.argv[2], function(req){
  req.setEncoding('utf8');

  var str = "";
  req.on('data', function(data){
    str += data;
  });

  req.on('end', function(){
    console.log(str.length);
    console.log(str);
  });
});
