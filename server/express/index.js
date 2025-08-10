import express from 'express';
import path from 'path';
const app = express();

const filename = path.resolve('../client');
const publicpath = path.resolve('../client/public');
app.use(express.static(publicpath));

function middleware(req, res, next) {
    console.log("Middleware called");
    next();
}

app.use(middleware);

app.get('/', (req, res) => {
    res.sendFile(filename+"/home.html");
});

app.get('/about', (req, res) => {
    // absolute file path
    res.sendFile(filename+"/about.html");
});

app.use((req, res) => {
    res.status(404);
    res.sendFile(filename+'/404.html');
});

app.listen(4000);