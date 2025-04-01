// scope ke baaare mein
// Global scope, local scope,block scope

// let a=10;
// var b=20;
// const c=30;
// Global scope wale
// jab hum kisi ko bhi bracket mein nhi daalte hai tb wo global part ka hissa hota hia  



// function scope or local scope inko hmlog bas brackett ke andart hi access kr skte hia 
// function greet(){
//    let a=10;
// var b=20;
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log("Hello function");
// console.log(a,b,c);
// };
// greet();
// console.log(a); function ke bahar isko use nhi kr skte hai 

// ye Block Scope hai 
// isme if else wle hai 

// if(true){
//     let a=10;
//     // var b=20;
//     const c=30;
// }
// console.log(b);

// for(var i=0;i<5;i++){
//     console.log(i);
// }
// console.log(i);
// var block scope ko follow nhi krta hai



// let amount=20;

// if(true){
//     let amount=30;
//     console.log(amount);
// }


// greet()
// function greet(){
//     console.log("Hello greet");
// }
// const meet=function(){
//     console.log("Hello Meet");
// }
// meet();

// while loop
// if(let i=0;i<6;i++)
// {

// }

// let i=1;
// while(i<6)
// {
//     console.log(i);
//     i++;
// }
// do while loop 


// let arr=[10,20,30,40];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
const obj={
    name:"Rohit",
    age:18,
    amount:420,
    city:"patna"
}

// for in loop


// const key=Object.keys(obj);
// // ['name','age','amount','city']
// for(let i=0;i<key.length;i++)
// {
//     console.log(obj[key[i]]);
// }




