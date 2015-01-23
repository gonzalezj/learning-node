// Learn you node tutorial
// Excercise #5

// filtered_ls.js

// The first argument will be the file's path,
// and the second argument will be the file's extension

// declaration section
var fs = require('fs');
var path = require('path');

// Async method
fs.readdir(process.argv[2], function(err, files){
  if(err)
    return callback(err);

  files.forEach(function(file){
    if(path.extname(file) === '.' + process.argv[3])
      console.log(file);
  })
  callback(null, files);
});
