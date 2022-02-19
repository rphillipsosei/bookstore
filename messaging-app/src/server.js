const express = require('express');
const { emit } = require('nodemon');
const { on } = require('pg/lib/query');
const { Server } = require('socket.io');
const socketServer= require("./socketServer")
const app = express();
const port = 5000

app.use(express.static("public"))

const httpServer = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

 

socketServer.listen(httpServer);