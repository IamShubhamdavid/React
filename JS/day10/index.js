// how to create object
// const obj={
//     name:"rohit",
//     account_balance:420,
//     gender:"Male",
//     age:30,
//     "account number":23421,
//     0:20,
//     1:35,
//     undefined:30,
//     null:"Shubham"
// }

// const inst={
//     insta_id:"shubham_david",
//     password:"Bhaiya19"
// }
// console.log(typeof obj);
// // console.log(inst);
// console.log(obj["account_balance"]);
// console.log(obj["account number"]);
// console.log(obj["0"]);
// console.log(obj[1]);
// console.log(obj);

// console.log(obj.undefined);
// console.log(obj["null"]);


// second method 
// const person=new Object();

// // property add
// person.name="Rohit";
// person.age=35;
// person.gender="Male";
// console.log(person);

// // delete
// delete person.age;
// console.log(person);
// // MOdify or update
// person.name="Shubham";
// console.log(person);



// third method

// class people{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// }

// let per1=new people("Rohit",29,"Male");
// let per2=new people("Mohit",30,"Female")

// console.log(per1,per2);

let obj={
    name:"rohit",
    age:30,
    account_balance:420,
    gender:"Male"
};
const arr=Object.values(obj);
// const arr=Object.keys(obj);

console.log(arr);

// keys,value
const arr2=Object.entries(obj);
console.log(arr2);

// assign use case
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj4={e:5,f:6};
const obj3=Object.assign({},obj1,obj2,obj4);
console.log(obj4.e);

// spread operator
const obj5={...obj1,...obj2,...obj4};
console.log(obj5);






