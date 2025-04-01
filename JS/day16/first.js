let obj={
    name:"Rohit",
    age:10,
    orange:1,
}

let curr="orange";

// console.log(obj.hasOwnProperty(curr))

if(obj.hasOwnProperty(curr))
    obj[curr]++;
else
    obj[curr]=1;

console.log(obj);
















