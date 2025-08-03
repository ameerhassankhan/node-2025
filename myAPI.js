const http = require('http');

const userData = [
    {
        name: 'Hassan Niazi',
        age: 22,
        email: "hassanniazi329@gmail.com"
    },
    {
        name: 'John Doe',
        age: 34,
        email: "john@gmail.com"
    },
    {
        name: 'Peter',
        age: 32,
        email: "peter@gmail.com"
    }
]
http.createServer((req, resp) => {
    // from terminal (process.args)
    req.url
    resp.setHeader('Content-Type', 'application/json');
    resp.write(JSON.stringify(userData));
    resp.end();
    // process.exit(0);
}).listen(3000);