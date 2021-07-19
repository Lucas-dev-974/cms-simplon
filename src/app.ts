import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Router } from "./Router"

const ejs = require('ejs');
const fs = require('fs')


const port = 3000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    const router = new Router([{ path: '/', file_path: './home.html',name: 'home'}])
    
    switch (request.url) {
        case '/': {
            response.writeHead(200, {"Content-Type": "text/html"});
            if (request.method === 'GET') {
                let html_content = fs.readFileSync(__dirname + '/home.html', 'utf8')
                let file = ejs.render(html_content)
                return response.end(file);
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