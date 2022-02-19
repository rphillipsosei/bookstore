const socketio = require("socket.io");


const users = {
    
    };  

let connected = 0;

//listen for websocket connections
const listen = function(httpServer){

const server = socketio(httpServer);

const setStatus = function() {
//broadcast message 
server.emit("status", connected);
}

//console log with id of client when user connects
server.on("connection", (client) => {
console.log("Connected:", client.id);


    
//console log with id of client when user disconnects
client.on("disconnect", () => {
    console.log('Disconnected:', client.id)
    //find disconnected user in the database
    const getUserByID = (id) => {
        for (const name in users) {
           if(users[name] == id) {
               return name;
           }
        }
    }
    //if above function finds a match, delete the found user
    const user = getUserByID(client.id)
    if(user) {
        delete users[user]
    }
    //each time a user disconnects, reduce active users 
    connected--
    setStatus();
    console.log(users)
});

client.on("private", data => {
  const name = data.name;
  const message = data.message
  const id = users[name]
  server.to(id).emit("private", message);
})


//every time a user is logged, add them to our users database
client.on('register', name => {
    console.log(name);

    users[name] = client.id
    console.log(users)
})

//client(single) msg
server.to(client.id).emit("notify", `Connected [${client.id}]`);
connected++
setStatus(); 
});

return server;

};

module.exports = { listen };