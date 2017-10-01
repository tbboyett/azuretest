const url = require('url');

module.exports = function () {

    this.handleResponse = function (request, response) {
        var path = url.parse(request.url).pathname;

        switch (path) {
            case '/':
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.end(JSON.stringify({test: 'Hello World2!'}));
            case '/profile':
                var profile = require('./profile.js');
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.end(new profile().getJSON());
        default:
            response.writeHead(404);
            response.end('API not defined');
        }
    };
};
