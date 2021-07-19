"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var ejs = require('ejs');
var port = 3000;
var server = http_1.createServer(function (request, response) {
    switch (request.url) {
        case '/': {
            if (request.method === 'GET') {
                return response.end(ejs.render('./home.html'));
            }
            break;
        }
        default: {
            response.statusCode = 404;
            response.end();
        }
    }
});
server.listen(port);
