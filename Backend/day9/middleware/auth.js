const Auth=(req,res,next)=>{
    // Add item into food menu
    // Authentication krna pdega ki kya ye admin hi hai 
    // Dummy code
    const token="ABCDEF"
    const Access=token === "ABCDEF"?1:0;

    if(!Access)
        res.status(403).send("No permission");

    next();

}

module.exports={
    Auth,
}

