const jwt=require('jsonwebtoken');
const User=require("../Models/user");

const userAuth=async (req,res,next)=>{

    try{
        const{token}=req.cookies;
        if(!token){
            throw new Error("Token doesnot exist");
        }

        const payload =  jwt.verify(req.cookies.token,"Rohit@13412$");
        // console.log(payload);

        const{id}=payload;
        if(!id){
            throw new Error("Id is missing");
        }
        const result = await User.findById(payload._id);

        if(!result){
            throw new Error("USer doesn't exist");
        }
        req.result=result;
        
        next();

    }
    catch(err){
        res.send("Error: "+err.message);
    }
}

module.exports=userAuth;


