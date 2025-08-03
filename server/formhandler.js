
const queryString = require('querystring');

function formHandler(req, resp) {
     const userData = [];

        req.on('data', chunk => {
            userData.push(chunk);
        });

        req.on('end', () => {
            const parsedData = queryString.parse(Buffer.concat(userData).toString());
            console.log(parsedData);

            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(`<h2 style="color:blue">Name: ${parsedData.username}, Age: ${parsedData.age}</h2>`);
            resp.end('<h1 style="color:green">You are registered successfully</h1>');
        });
    }

module.exports = formHandler;