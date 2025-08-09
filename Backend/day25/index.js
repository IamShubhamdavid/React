const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/user")
const validateUser = require("./utils/validateuser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const userAuth = require("./middleware/userAuth");
require('dotenv').config()
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const commentRouter = require("./routes/comment")
const redisClient=require("./config/redis");
const rateLimiter=require("./middleware/rateLimiter");


app.use(express.json());
app.use(cookieParser())

app.use(rateLimiter);


app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use("/comment", commentRouter);

const InitalizeConnection=async()=>{
    try{

        await redisClient.connect();
        console.log("Connected to Reddis");

        await main();
        console.log("Connected to MongoDB");

        await Promise.all([redisClient.connect(),main()]);
        console.log("DB connected");

        app.listen(process.env.PORT,()=>{
            console.log("Listening at port 3000");
        })
    }
    catch(err)
    {
        console.log("Error"+err);
    }
}

InitalizeConnection();


