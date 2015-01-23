// Learn you node tutorial
// Exercise #2

// baby_steps.js

// declaration section
var result=0;

// this method will check for the number of arguments 
if(process.argv.length > 2)
  {
    for(var i = 2; i < process.argv.length; i++)
      {
          result += Number(process.argv[i]);
      }
      console.log(result);
  }
else
  {
    console.log("put more arguments when execute your program");
  }
