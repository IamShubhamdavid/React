let nub:number=10;

let y = 10;
let val="Shubham";

let money:any;

money=20;
money="Shubham";
//console.log(money.toUpperCase());

//"any" hmlog isliye use nhi krte h kyuki wo number pr bhi uppercase lg jata hai jo ki valid nhi h

let val2:unknown;

val2=20;
val2="Shubham";

if(typeof val2 == 'string')
console.log(val2.toUpperCase());

if(typeof val2 == 'number')
console.log(val2.toFixed(2));

// NOn primitive data type

let arr1:number[]=[2,4,5,7,11];
let arr2=[2,1,19,10];

let arr3:(string | number)[]=["rohit",20,11,"Mohan"];
arr3.push(10);

let arr4:(string | number| boolean)[]=["rohan",10,true];

let tuple:[string,number,number]=["Riya",10,12];
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
let obj1:{name:string,age:number,gender:string}={
    name:"Shubham",
    age:18,
    gender:"male"
}

let person:{name:string,age:number,balance:number};

person={
    name:"Shubham",
    age:18,
    balance:420
};
let n1:number;
n1=10;


type customer={
    name:string,
    age:number,
    id:string
}
let c1:customer={
    name:"Rohan",
    age:18,
    id:"iedub"
}
//type ko hmlog primitive data type ke sath use kr skte hai

//"Interface" jyda acha rhega use krna "Type" ke respcet mein kyuki 
// interface merge kr deta hai kuch bhi changes ko ye jyda strong hota hai 

interface admin{
    name:string,
    age:number,
    position:string
};
interface admin{
    id:number
}

let obj3:admin={
    name:"Rohit",
    age:18,
    position:"manager",
    id:24
}





