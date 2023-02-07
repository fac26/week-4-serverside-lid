const express = require("express");
const staticHandler = express.static('public');

const { getHomePage } = require('./routes/home');

const server = express();

server.use(staticHandler);

server.get('/', getHomePage);

module.exports = server;