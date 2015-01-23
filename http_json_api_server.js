// Learn you node tutorial
// Excercise #13

// http_json_api_server.js

// declaaration section
var http = require('http');
var url = require('url');

// the second argument will be the port number.
server = http.createServer(function(req, res){
  var urlObj = url.parse(req.url, true),
  pathname = urlObj.pathname,
  strtime = urlObj.query.iso,
  result;

  if(pathname === '/api/unixtime'){
    result = getUnitTimestamp(strtime);
  }
  else if (pathname === '/api/parsetime'){
    result = getTimeObj(strtime);
  }

  if(result){
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(result));
  }
  else{
    res.writeHead(404);
    res.end();
  }
});

// unix timestamp epoch
function getUnitTimestamp(strtime){
  return{
    unixtime: getTimestamp(strtime)
  };
}

function getTimestamp(strtime){
  return Date.parse(strtime);
}

// create the JSON object
function getTimeObj(strtime){
  var date = new Date(getTimestamp(strtime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

server.listen(process.argv[2]);
