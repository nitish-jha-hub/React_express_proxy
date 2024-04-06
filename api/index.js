import express from 'express'; // ES6 //not working in node.js which is not supporting ES6 syntax
// const express = require('express'); // ES5
const app = express();
// import bodyParser from 'body-parser';


app.get('/', (req, res) => {
    res.send('Hello World! from api/index file');
    });

app.post('/', (req, res) => {
    res.send('Got a POST request at / on api/index file');
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);