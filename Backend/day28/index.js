
const express=require('express');
const app=express();
const main=require('./aichat');

app.use(express.json());
const chattingHistory={};

// const chattingHistory={
//     1:[{role:'user', parts:[{text:"Hi, How are you"}]},{role:'model',parts:[{text:"I am good what about you"}]}],
//     2:[],
//     3:[]
// };
// we will install our user chat history
// key value pair 
// key=id
// value = array



app.post('/chat',async (req,res)=>{

    const {id,msg}=req.body;

    if(!chattingHistory[id]){
        chattingHistory[id]=[]
    }

    // extract user history
    const history=chattingHistory[id];
    const promptmessage=[...history , {
        role:'user',
        parts:[{text:msg}]
    }]

    const answer= await main(promptmessage);

    // user auestion bhi daalna h 
    // model ke response ko bhi store krana h
    history.push({role:'user',parts:[{text:msg}]})
    history.push({role:'user',parts:[{text:answer}]});
    res.send(answer);

})

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})

