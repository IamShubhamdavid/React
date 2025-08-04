const express= require ("express");
const app=express();


// Middleware wle respond nhi krte h aur wo fix nhi rehta h code mein

// Route Handler
// app.use("/user", (req,res,next)=>{

//     // ek baar mein hi connection ko bhej skte hai
//     console.log("first");
//     //res.send("Hello ji");
//     next();
//     //console.log("sixth");
// },
// (req,res,next)=>{
//     console.log("second");
//     //res.send("hello I am second");
//     next();
//     //console.log("fifth");
// },
// (req,res)=>{
//     console.log("Third")
//     res.send("Hello i am third");
//     //console.log("fourth");
// })

//Ye log mein pura Data store krke rakhega
// Maintain log through middleware
app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    // Authorization wagera kr skta hai
    next();
})

app.get("/user",(req,res)=>{

//console.log(`${Date.now()} ${req.method} $(req.url)`);
    res.send("Info about user")
})

app.post("/user",(req,res)=>{
    res.send("Info saved");
})

app.delete("/user",(req,res)=>{
    res.send("Info delete");
})







app.listen(3000,()=>{
    console.log("Listening at port 3000");
})

// Request : Log ko maintain karta
// Timing: KIs type ki request thi, URL
