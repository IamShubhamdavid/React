const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/user")
const ValidateUser=require("./utils/ValidateUser");
const bcrypt= require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt=require('jsonwebtoken');
const userAuth=require("./middleware/userAuth");

// Hmlog API ko call isliye krte hai taaki hmein baaar baar pure mein change nhi krna pde
app.use(express.json());
app.use(cookieParser())


app.post("/register", async (req,res)=>{

    try{

        // Validate kya uske andar firstName
        validUser(req.body);
        
        //  converting password into hashing
       req.body.password = await bcrypt.hash(req.body.password,10);

        await User.create(req.body);
        res.send("User Registered Successfully");
    }
    catch(err){
        res.send("Error "+ err.message);
    }
})

app.post("/login",userAuth, async(req,res)=>{

    try{

        // validate karna
        
        const people = await User.findOne({emailId:req.body.emailId});
        
        // if(!(req.body.emailId===people.emailId))
        //     throw new Error("Invalid credentials");

        const IsAllowed = await bcrypt.compare(req.body.password, people.password);

        if(!IsAllowed)
            throw new Error("Invalid credentials");
        

        // jwt token 

        const token = jwt.sign({_id:people._id, emailId:people.emailId},"Rohit@13412$");

        res.cookie("token",token);
        res.send("Login Successfully");

    }
    catch(err){
        res.send("Error: "+err.message);
    }
})

app.get("/user", async(req,res)=>{
    
    try{

        // code likhna padege, user ko authenticate kar paauon
        
        res.send(req.result);

    }
    catch(err){
       
        res.send("Error "+err.message);
    }


})

app.delete("/user/:id",userAuth, async (req,res)=>{

    try{

        // authenticate the user:

        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Succesfully");
    }
    catch(err){
        
        res.send("Error"+err.message);
    }


})

// {
//     "_id":"67ec0a8bffe09233dc9c93fc",
//     "age": 12,
//     "emailId": "mohan@gmail.com"
// }

app.patch("/user",userAuth, async(req,res)=>{

    try{
        const {_id, ...update} = req.body;

        await User.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("Update Succesfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
})



main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));


