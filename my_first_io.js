// Learn you node tutorial
// Excercise 3

// my_first_io.js

// declaration section
var fs = require('fs');

// this will return a Buffer. the second argument will be the file path
var file = fs.readFileSync(process.argv[2]);

// convert the buffer into a string
var str = file.toString();

// check the file length by spliting the file in newlines.
console.log(str.split('\n').length-1);
