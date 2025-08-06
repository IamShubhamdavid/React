const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/user")

// Hmlog API ko call isliye krte hai taaki hmein baaar baar pure mein change nhi krna pde
app.use(express.json());

app.post("/register",async (req,res)=>{

    try{
        // Validate kya uske andar firstName
         // req.body ke andar data aaya hai, usmein first_name present hona chahiye
        const mandatoryField=["firstName","emailId","age"]

        // const IsAllowed = Object.keys(req.body).every((keys)=> mandatoryField.includes(keys));
        // if(!IsAllowed)
        //     throw new Error("Fields Missing");

        // const IsAllowed = mandatoryField.every((k)=> Object.keys(req.body).includes(k));
        // if(!IsAllowed)
        //     throw new Error("Fields Missing");

       await User.create(req.body);
       res.send("User Registered Successfully");

    }
    catch(err){
        res.send("Error"+err.message);
    }
})

app.get("/info",async(req,res)=>{

    try{
        const result=await User.find();
        res.send(result);
    }
    catch(err){
        res.send("Error"+err.message);

    }
})

app.get("/user/:id", async(req,res)=>{
    try{

        const result = await User.findById(req.params.id);
        res.send(result);
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

app.delete("/user/:id",async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully");
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

app.patch("/user",async(req,res)=>{
    try{
        const{id,...update}=req.body;
        await User.findByIdAndUpdate(id,update,{"runValidators":true});
        res.send("Updated Successfully");
    }
    catch(err){
        res.send("Error"+err.message);
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
