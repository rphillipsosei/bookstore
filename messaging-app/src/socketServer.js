const socketio = require("socket.io");

//listen for websocket connections
const listen = function(httpServer){
const server = socketio(httpServer)
return server
};

module.exports = { listen };