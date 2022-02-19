$(function() {

    let socket = null;

//connect on click
//do not connect if client is already connected

$('#connect').on('click', () => {
   if(socket) {
       return;
   }
   //add name submitted by user to user database, then connect this entry
   const name = $("#name").val();
    socket = connect(name)
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


const connect = function(name) {
    const socket = io();

    socket.on("connect", event => {
        console.log("Connected to server")
        
        
        // keep the user (second param) in memory
        socket.emit("register", name)
    });


//user will be notified upon cxn by other users (NOT WORKING )
    socket.on("notify", data => {
       $(".notify").html(data)
    })

    
    //message to all users about number of connected clients
    socket.on('status', data => {
        $('.status').html(data)
    })

    return socket
}