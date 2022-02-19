const express = require('express');
const socketServer= require("./socketServer")
const app = express();

app.use(express.static("public"))

const httpServer = app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});

socketServer.listen(httpServer);