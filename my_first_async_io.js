// Learn you node tutorial
// Excercise #4

// my_first_async_io.js

// declaration section
var fs = require('fs');

// async function with a callback
fs.readFile(process.argv[2], 'utf8',function(err, data){
  if(err) throw err;

  var counter = data.toString().split('\n').length-1;
  console.log(counter);
});
