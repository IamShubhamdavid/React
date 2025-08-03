

// socket mein jab tak aap request nhi maroge to server kuch bhi nhi bhejega 

// web socket Chat application banane mein kaam aata h 
//  aur wo khud aapko jabdarsti  message bhej deta hai

const http=require('http');

const server=http.createServer((req,res)=>{
    // res.end("Hello coder army");

    if(req.url==="/"){
        res.end("Hello coder army");
    }
    else if(req.url==="/contact"){
        res.end("This is our Contact page");
    }
    else if(req.url==="/about"){
        res.end("This is our About page");
    }
    else{
        res.end("Error:page not found");
    }

})

server.listen(4000,()=>{
    console.log("I am listening at port number 4000");
})
