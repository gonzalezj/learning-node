// Learn you node tutorial
// Excercise #6

// make_it_modular_caller.js

// caller example for "Make it modular" exercise

// declaration section
var my_module = require('./make_it_modular');
var path = process.argv[2];
var extension = process.argv[3];

// call my module with File's path, extension and callback
my_module(path, extension, function(err, data) {
  if(err) throw err;

  data.forEach(function(file){
    console.log(file);
  })
});
