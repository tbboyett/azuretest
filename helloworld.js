'use strict';

var http = require('http');
var port = process.env.PORT || 3000; 

var server = http.createServer(function(request, response) {
  	response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({ test: 'Hello World!' }));
});

server.listen(port, function() {
  console.log('Server working at http://localhost:' + port);
});