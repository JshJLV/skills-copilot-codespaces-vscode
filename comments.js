// create a web server 
// 1. create a web server
// 2. create a route
// 3. create a handler
// 4. send a response
// 5. start the server

const express = require('express');
const app = express();
const port = 3000;

// 2. create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 3. create a handler
app.get('/comments', (req, res) => {
    res.send('This is a comments page');
});

// 4. send a response
app.get('/comments/:id', (req, res) => {
    res.send(`This is a comments page for ${req.params.id}`);
});

// 5. start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});