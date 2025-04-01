// Global object:object   ek trah se Library hai 
// Chrome browswer:Window
// NodeJs: Global
// GlobalThis: ko hmlog koi bhi Environment mein likh skte hai 


// console.log("Hello World");
// console.log(Math.random()); // ye sab kuch Global object mein store rhta hai

//set interval()
//new Object();
//new String("Rohit");

// let obj={
//     name:"Shubham",
//     age:18
// };
// console.log(obj.name);
// console.log(global);
// console.log(globalThis.Math.random());


"use strict"
// a=10;
// console.log(a);

let obj={
    name:18
}

Object.freeze(obj);
obj.name=30;
console.log(obj);











