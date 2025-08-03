const fs = require('fs');
function userForm(req, res) {
        fs.readFile('../client/html/form.html', "utf-8", (err, data) => { 
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1 style="color:red">Error reading file</h1>');
                return;
            }   
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    };

module.exports = userForm;