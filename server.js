'use strict';

const http = require('http'),
    routeHandler = require('./router.js'),
    hostname = process.env.hostname || '127.0.0.1',
    port = process.env.PORT || 3000,
    server = http.createServer(function(request, response) {
        var router = new routeHandler();

        try {
            router.handleResponse(request, response);
        } catch (err) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end('A problem has occurred, please try again!');
            console.log(err);
        }
    });

server.listen(port, hostname, function() {
    console.log('Server working at http://' + hostname + ':' + port);
});