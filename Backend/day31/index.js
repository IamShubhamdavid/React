const express= require('express');
const app=express();
const {Server}=require("socket.io");
const http= require('http');

const server= http.createServer(app);
const io= new Server(server);



io.on("connection",(socket)=>{

    socket.on('message',(data)=>{
        io.emit('new_message',data);
        // emit mtlb sbko bhejo
        // on ka mtlb listen krna and socket ka mtlb koi individual socket
    })

    socket.on("disconnect",()=>{
        console.log("Disconnected from server");
    })

})

server.listen(3000,()=>{
    console.log("Listening");
})





// const server= app.listen(3000,()=>{
//     console.log("Listening at port 3000");
// })

// const io= new Server(server);

