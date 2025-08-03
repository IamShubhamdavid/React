

// system ka access hme OS se hi lena pdega 
// libuv ke andar saare Global object like (setTimeout,setInterval etc) ka code C language mein likha hua h 
// aur request leta hai OS se like file transfer, timer etc;

// Global execution contenst (GEC)

// File system
const fs=require('fs') 

let a=10;
let b="hello ji"
console.log(b);

function sum(a,b){
    return a+b;
}

fs.readFile("./data.json", "utf-8", (err,res)=>{
    console.log(res);
})

setTimeout(()=>{
    console.log("Hello ji");
},3000)

console.log(a);
console.log(sum(3,8));


