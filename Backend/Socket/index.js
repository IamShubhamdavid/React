const express= require('express');
const app=express();
const {Server}=require("socket.io");
const http= require('http');
const path=require('path');

const server= http.createServer(app);
const io= new Server(server);

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'index.html'))
});


io.on("connection",(socket)=>{

    // socket.on('message',(data)=>{
    //     socket.broadcast.emit('new_message',data);
    //     // emit mtlb sbko bhejo
    //     // on ka mtlb listen krna and socket ka mtlb koi individual socket
    // io.to. means jo bhi message bheje hai wo sabke pass jayega 
    // })

    socket.on('message',({room,msg})=>{
        socket.to(room).emit('new_message',msg);
    })

    socket.on('join-room',(room)=>{
        socket.join(room);
    })



//      socket.on('rampage',(data)=>{
//         io.emit('new_message',data);
// })

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

