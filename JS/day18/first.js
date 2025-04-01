
// The  this keyword in JS is a special keyword that refers to 
// thye context in which the current code is being executed.
// Its value depends on how the function where it is used is called. 


// Global Context (Outside Any Function)
// In browsers:Window
// In Node.js: Module's exports object


// When this is used inside a regular function, it refers to the global object
//  :Strict Mode
// this will be undefined inside a function



// "use strict"
// function greet(){
// console.log(this);
// }
// greet();
// window.greet();

//Object context
// When this is used inside an object's method, it refers to the object that is inside a function
// const obj={
//     name:"Rohit",
//     age:20,
//     greet:function(){
//     console.log(this.name);
// }
// }
// obj.greet();

// Arrow functions don't have their own this
// instead they inherit from the surrounding (lexical) scope.

// let obj={
//     name:"Rohit",
//     age:20,
//     greet:()=>{
//         console.log(this);
//     }
// }
// obj.greet();


// let obj={
//     name:"Rohit",
//     age:20,
//     greet:function(){
//        let ab = ()=>{
//         console.log(this);
//        };
//        ab();
//     }
// }
// obj.greet();



// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// let a= new Person("Rohit",20);
// console.log(a);


// let greet=()=>{
//     console.log(this); // ye global scope ko lega 
// }

// greet();
// "use strict"

//inside a function
//(Non strict mode)
// When "this" is used inside a regular function,it refres to the global object

// Strict mode
// "this" will be undefined inside a function. 


// let is not a part of function

// let meet=function(){
//     console.log(this);
// }
// meet();


// let blockscope ka part hai 
// "let" ko jab isko function ke andar likhte hai tb wo blockscope ka part nhi rehta hai


















