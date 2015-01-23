// Learn you node tutorial
// Excercise #7

// http_client.js

// declaration section
var http = require('http');


http.get(process.argv[2], function(request){
  request.setEncoding('utf8');

  //standar API instuction to make a request
  request.on('data', function(data){
    console.log(data);
  })

  //In case of error
  request.on('error', function(error){
    console.log(error);
  });
});
