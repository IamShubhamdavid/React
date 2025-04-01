"use strict";
let num = 10;
let y = 10;
let val = "Shubham";
let money;
money = 20;
money = "Shubham";
//console.log(money.toUpperCase());
//"any" hmlog isliye use nhi krte h kyuki wo number pr bhi uppercase lg jata hai jo ki valid nhi h
let val2;
val2 = 20;
val2 = "Shubham";
if (typeof val2 == 'string')
    console.log(val2.toUpperCase());
if (typeof val2 == 'number')
    console.log(val2.toFixed(2));
// NOn primitive data type
let arr = [2, 4, 5, 7, 11];
let arr2 = [2, 1, 19, 10];
let arr3 = ["rohit", 20, 11, "Mohan"];
arr3.push(10);
let arr4 = ["rohan", 10, true];
let tuple = ["Riya", 10, 12];
//tuple mein sbko pehle hi specify krna padega
//"Interpreter Language" mein har ek line ke baaad code execute hota h
//"Compile" time language mein convert hota h Machine code(like 0 and 1) mein uske baad ek sath execute hota hai cpu mein through runtime
//JIT:Just in time is combination of Interpreter and  Compile time language
// Platform dependent language like C,C++ kyuki ye harek system mein alag alag execute hota h jaise ki 
// linux,Windows,macbook ye sb mein 
// Platform Independent language like Java, Javascript kyuki ye koi bhi system mein excute ho jata h
//jaise ki linux,windows,macbook
//TypeScript bas covert krta hai to JavaScript
// Isko "Transpiler" bolte hai kyuki ye naa hi compiler hai aur na hi interpreter 
//Onjects 
//inline
let obj1 = {
    name: "Shubham",
    age: 18,
    gender: "male"
};
let person;
person = {
    name: "Shubham",
    age: 18,
    balance: 420
};
let n1;
n1 = 10;
let c1 = {
    name: "Rohan",
    age: 18,
    id: "iedub"
};
;
let obj3 = {
    name: "Rohit",
    age: 18,
    position: "manager",
    id: 24
};
