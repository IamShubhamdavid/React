// Number, string, boolean,null, undefined,Bidint,Symbol


// Non primitive data type
// Array,object,function

// let n=10;
// let n2=20;
// let n3=50;

// array
let arr=[10,20,50];
console.log(typeof arr);

// object
// object ka kaam hai jaha ek sath saare information store rahe
// key:value

let obj={
    user_name:"Shubham",
    account_number:34541514,
    balance:243
}

console.log(obj);

// function

let fun = function(){
    console.log("Hello Coder Army")
}
console.log(typeof fun);
fun();


// type conversion

let account_balance ="100";
let num=Number(account_balance);

console.log(typeof account_balance);
console.log(typeof num);

// Boolean convert to number
let x=false;
console.log(Number(x));

let account="100xs";
let bal="200s"
console.log(Number(account));
console.log(Number(bal));
// output will be NAN not a number


// Null

let x1=null;
console.log(Number(x1));
// output always give zero

// undefined

let x2;
console.log(Number(x2));

// string ke andar convert
let ab=20;
console.log(String(ab));  

let ax= false;
// ye boolean wla false hai
console.log(String(ax));
// iska output string wla hai false 


// Boolean
let abc="23";
console.log(Boolean(abc));
// jab abc empty rahega tb only false dega nhi to always true 

console.log(4+8);

// divide multiply left to right
// add sub left to right

// Modulous give give reminder
console.log(20%3);

// ++ increment operator, -- decrement opertaor
let sum=20;
// sum++
// sum++ post increment, sum-- post increment
// ++sum pre increment, --sum pre decrement
console.log(sum++); // output mein koi change nhi hoga

// output mein change hoga
console.log(++sum);

// Assignment operator
let y=20;
y=y+10;
console.log(y);





