
// Fetch API
// CRUD: create read update delete

//HTTP method. Get Post patch Put delete
// Rest API (Application programming Interface)


const express= require ("express");

const app=express();

// nodemon server ko khud hi change kr deta h 

app.use("/about",(req,res)=>{
    res.send("I am your about page");
})

// ? char become Optional
// + char can be repeated multiple times
// * any number of character can arrive

// app.use("/about/:id", (req,res)={ console.log();})

// app.use((req,res)=>{
//     res.send("Hello coder army hello everyone");
// })
// app.use("/",(req,res)=>{
//     res.send("I am your empty page");
// })

// app.use("/contact",(req,res)=>{
//     res.send("I am your contact page");
// })

app.listen(4000,()=>{
    console.log("Listening at port 4000");
})





