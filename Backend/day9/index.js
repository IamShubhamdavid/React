const express=require("express");
const app=express();
const {Auth}=require("./middleware/auth")

// CRUD: Cfreate Read Update Delete

// Database: array
app.use(express.json());

const FoodMenu=[
    {id:1,food:"Chowmein",category:"veg",price:500},
    {id:2,food:"Momo",category:"veg",price:50},
    {id:3,food:"Chilly paneer",category:"veg",price:250},
    {id:4,food:"Rolls",category:"veg",price:80},
    {id:5,food:"roti",category:"veg",price:5},
    {id:6,food:"salad",category:"veg",price:100},
    {id:7,food:"Chola",category:"veg",price:200},
    {id:8,food:"Mutton",category:"veg",price:700},
    {id:9,food:"egg",category:"veg",price:40},
    {id:10,food:"Paneer Rolls",category:"veg",price:90},
    {id:11,food:"lolipop",category:"veg",price:350},
    {id:12,food:"Baby corn",category:"veg",price:500},
    {id:13,food:"Swarma",category:"veg",price:450},
    {id:14,food:"Chicken chilly",category:"veg",price:400},
]

// user ka jo bhi food add hoga ,wo idhar jaayega
const AddToCart=[];

app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);
})

//app.use("/admin",Auth)

// Authentication: kisi ki id ko verify krna ya jo hm claim kr rhe kya mai wahi hun 
// Authorization: Power hai  

// Request handler multiple likh skte hai
app.post("/admin",Auth,(req,res)=>{

        FoodMenu.push(req.body);
        res.status(201).send("Item added Suceesfully");

})

app.delete("/admin/:id",Auth,(req,res)=>{
   
        const id=parseInt(req.params.id);
        const index=FoodMenu.findIndex(item=>item.id===id);
    
        if(index===-1){
            res.send("Item doesn't exist");
        }
        else{
            FoodMenu.splice(index,1);
            res.send("Successfully Deleted");
        }
})

app.patch("/admin",Auth, (req,res)=>{
        const id=req.body.id;
        
        const fooddata=FoodMenu.find(item=>item.id===id);

        // Copy by reference
        if(fooddata){
            if(req.body.food)
                fooddata.food=req.body.food;
             if(req.body.category)
                fooddata.category=req.body.category;
             if(req.body.price)
                fooddata.price=req.body.price;

             res.send("Succesfully Updated");

        }
        else{
            res.send("Not Exist");
        }
    })


app.listen(3000,()=>{
    console.log("Listening at port 3000");
})

