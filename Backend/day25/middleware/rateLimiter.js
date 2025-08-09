
const redisClient=require("../config/redis");


const rateLimiter=async (req,res ,next)=>{

    try{
        const ip=req.ip;
        const count= await redisClient.incr(ip);

        if(count>60){
            throw new Error("User Limit Exceeded");
        }
        if(count==1){
            redisClient.expire(3600);
        }
        next();

    }
    catch(err){

        res.send("Error"+err);
    }

}

module.exports=rateLimiter;
