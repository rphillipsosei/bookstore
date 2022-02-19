const socketio = require("socket.io");

//listen for websocket connections
const listen = function(httpServer){

const server = socketio(httpServer);

//console log with id of client when user connects
server.on("connection", (client) => {
console.log("Connected:", client.id);
});

//console log with id of client when user disconnects
server.on("disconnect", () => {
    console.log('Disconnected:', client.id)
});

return server;
};

module.exports = { listen };