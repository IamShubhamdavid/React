
const express= require ("express");
const app=express();


const BookStore=[
    {id:1,name:"Harry Potter",author:"DevFlux"},
    {id:2, name:"Friends",author:"Vikas"},
    {id:3,name:"Nexus", author:"Rohit"},
    {id:4,name:"Prem Kahani",author:"Ravi"},
    {id:5, name:"Italy",author:"John"},
]

app.use(express.json());

app.get("/book",(req,res)=>{
    res.send(BookStore);
})

app.get("/book/:id",(req,res)=>{
    //console.log(req.params);
    const id= parseInt(req.params.id);
    const Book= BookStore.find(info=> info.id==id);
    res.send(Book);
})

app.post("/book",(req,res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Data Saved Successfully");
})


app.listen(3000,()=>{
    console.log("Listening at port 3000");
})

// route match honge: app.use

// app.get app.post app.patch app.delete
