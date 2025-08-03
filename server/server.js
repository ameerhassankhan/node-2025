const http = require('http');
const userForm = require('./form.js');
const formHandler = require('./formhandler.js');

http.createServer((req, resp) => {
    if (req.url === '/' && req.method === 'GET') {
        userForm(req, resp);
    } else if (req.url === '/registered' && req.method === 'POST') {
       formHandler(req, resp);
    } else {
        resp.writeHead(404, { 'Content-Type': 'text/html' });
        resp.end('<h1 style="color:red">404 Not Found</h1>');
    }
}).listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
