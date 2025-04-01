//let arr=[10,20,30,40]
// set:unique value

// const set1=new Set([10,20,30,40,30,20]);
// console.log(typeof set1);


// const set1=new Set();
// set1.add(4);
// set1.add(6);
// set1.add("Rohit");
// set1.delete(6);
// console.log(set1);
// console.log(set1.size);


// const user_id= new Set(["rohit_negi9","ravi_91"]);
//     let new_user="rohit_negi9";
//     console.log(user_id.has(new_user));

// user_id.clear();
// console.log(user_id);

// let arr=[10,20,30,40,30,50,40];
// const set1= new Set(arr);
// arr=[...set1];
// console.log(arr);

let set1=new Set([10,20,30,40,50]);
let set2=new Set([10,20,70,80]);
// Union
// let set3=new Set([...set1,...set2]); // spread operator use kr rhe hai taaki ek ek karke value bahra nikale
// console.log(set3);

// intersection
// filter:array
// const result= new Set([...set1].filter((num)=>set2.has(num)));
// console.log(result);

// Iterate over set
// for Of
// for(let value of set1)
//     console.log(value);


// for Each
set1.forEach((value)=>console.log(value));








