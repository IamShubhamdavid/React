

//Post se hm server mein data ko store karate h

//Default get method
fetch("http://sjkckenj.com")


const response=await fetch('https://api.example.com/data', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name:'John',age:30})
});

//PATCH ka kaam hai data mein tohra sa update kr dena 


