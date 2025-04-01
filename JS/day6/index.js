// primitive data type 

// const num=10;
// // num=20;// dubaara change nhi kr skte hai
// console.log(num);

// // Non primitive data type
// const obj={
//     id:10,
//     balanece:200
// }
// obj.id=11;
// console.log(obj);

// let obj2={
//     id:20,
//     money:30
// };
// // location of obj2 is 800
// // location of obj is 6521

// obj=obj2;


// String in js
// let str1 ="Hello Coder army";
// let str2 ="Mein to mast hun";
// let price=40;
// console.log(`price of the tomato is ${price}`);
// console.log(str1,str2);

// string concatentation
let s1= "hello";
let s2= " Coder army";
let s3= s1+s2;
console.log(s3.length); 

// "hello coder army"
console.log('"hello coder army"');
// 'hello coder army'
console.log("'hello coder army'");

let message="Rohit bhaiya bhut mastr aadmi hai.\\n bhut gande bhi hai ";
console.log(message);
// to print \n we use escape character \

// to print the particular alphabets 
let special="Shubham";
console.log(special[0]);
console.log(special.charAt(3));


// to lowercase
console.log(special.toLowerCase());
// let strtemp=special.toUpperCase();
console.log(special.toUpperCase());
console.log(special);

let hero="Hello Coder Army Coder";
// jo pehla hoga usko hi return krergas 
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.includes("Coder"));


// 0123456
let newstring="HeloDon";
// -7,-6,-5,-4,3,-2,-1
console.log(newstring.slice(0,3));
// Last index include nhi hoga
console.log(newstring.substring(0,3)); // slice can take negative index also
console.log(newstring.slice(-6,5));
// isme bas starting index ko dekh kr dega ans

let str10="Hello ji ";
console.log(str10.replace("ji","Money"));

let str11="Money,Honey,Sunny,Funny";
console.log(str11.split(","));

let str12="  Hello bhai";
console.log(str12.trim());
// starting aur ending ke sapce ko clear kr deta hai
console.log(str12.length);

// New way to create string
let latestString=new String("hello coder army");
console.log(latestString);
console.log(typeof latestString);






