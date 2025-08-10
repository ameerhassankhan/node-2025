const http = require('http');
const userForm = require('./form.js');
const formHandler = require('./formhandler.js');
const { readFile } = require('fs');
const fs = require('fs');

http.createServer((req, resp) => {
    // if (req.url === '/' && req.method === 'GET') {
    //     userForm(req, resp);
    // } else if (req.url === '/registered' && req.method === 'POST') {
    //    formHandler(req, resp);
    // } else {
    //     resp.writeHead(404, { 'Content-Type': 'text/html' });
    //     resp.end('<h1 style="color:red">404 Not Found</h1>');
    // }

    const loadheader = fs.readFileSync('../client/header.html', 'utf-8');
    const loadfooter = fs.readFileSync('../client/footer.html', 'utf-8');
    var url = "/home";
    if (req.url != '/'){
        url = req.url;
    }

    if(url != "/sytle.css"){
        fs.readFile("../client"+url+".html",'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/html' });
                resp.end('<h1 style="color:red">Error reading file</h1>');
                return;
            }
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.end(loadheader+data+loadfooter);
        });
    } else if (url == "/sytle.css") {
        readFile("client"+url, (err, data) => {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/css' });
                resp.end('<h1 style="color:red">Error reading file</h1>');
                return;
            }
            resp.writeHead(200, { 'Content-Type': 'text/css' });
            resp.end(data);
        });
    }


}).listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
