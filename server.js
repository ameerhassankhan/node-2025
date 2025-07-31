const http =  require('http');

http.createServer((req,resp)=>{
    resp.end('Hello, World! from server 1');
}).listen(3000);

http.createServer((req,resp)=>{
    resp.end('Hello, World! from server 2 hello  wqqc ');
}).listen(3001);