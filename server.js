const http =  require('http');
const fs = require('fs');
http.createServer((req,resp)=>{
    fs.readFile('html/index.html',"utf-8", (err, data) => {
        if (err){
            resp.writeHead(500, {'Content-Type': 'text/html'});
            resp.write('<h1 style="color:red">Error reading file</h1>');
            resp.end();
            return; 
        }
        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.write(data);
        resp.end();
    }   
)}).listen(4000);