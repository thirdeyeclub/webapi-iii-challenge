const express = require('express');
const helmet = require('helmet');
//routes here

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
    res.send(`<h1>Welcome home</h1>`);
});

module.exports = server;