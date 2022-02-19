$(function() {

    let socket = null;

//connect on click
//do not connect if client is already connected

$('#connect').on('click', () => {
   if(socket) {
       return;
   }
    socket = connect()
    })

//disconnect on click
// do not disconnect a null socket
$('#disconnect').on('click', () => {
    if(!socket) {
        return
    }
    socket.disconnect()
    socket = null
})

});


const connect = function() {
    const socket = io();
//connect will be triggered by event from user
    socket.on("connect", event => {
        console.log("Connected to server")
    })

    return socket
}