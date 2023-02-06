const express = require("express");

const server = express();

module.exports = server;

server.get("/", (request, response) => {
    const year = new Date().getFullYear();
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Home</title>
          <link rel="stylesheet" href="/style.css">
        </head>
        <body>
          <h1>Hello, it's ${year}</h1>
        </body>
      </html>
      <form action="/search" method="GET">
      <input name="keyword" />
      </form>
    `); //could form /submit, method="post" name="name"
  });  