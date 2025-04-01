// // let obj1={
// //     a:1,
// //     b:2
// // }

// // let obj2=obj1;
// // // Shallow copy  which shares the same copy
// // obj2.a=4;
// // console.log(obj2);


// // // deep copy  
// // let obj3=structuredClone(obj1);
// // obj3.a=6;
// // console.log(obj3,obj1);


// // Nested object   use karenge to obj1 and obj2 dono mein same rahega   
// // const user={
// //     name:"Shubham",   // ye sab deep copy hoga
// //     balance:420,
// //     address:{     // addres ke andar wla ka shallow copy hoga 
// //         pincode:800020,
// //         city:"Patna"
// //     }
// // }

// // // console.log(user.address.pincode);

// // // Structuredclone mein dono alag alag save hota hai obj1 and obj2

// // const user2=Object.assign({},user);
// // console.log(user2);
// // // user.address.pincode=243452;
// // // console.log(user.address.pincode);

// // user2.name="Rohit";
// // console.log(user2.name);


// // Destructuring of an object
// let obj={
//     name:"Rohit",
//     money:420,
//     balance:20,
//     age:18,
// };

// // const {name,balance,age}=obj;
// // const {name:full_name,balance:amount,age:umar}=obj;
// // console.log(full_name,amount,umar);
// const {name,age,...obj1}=obj; // rest operator
// console.log(obj1);

// const arr=[3,2,5,1,6];
// // const [first,second,third]=arr;
// // const [first,second, ,third]=arr;
// const [first,second,...third]=arr;
// console.log(first,second,third);

// let obj={
//     name:"Rohit",
//     age:18,
//     arr:[90,30,25,68],
//     address:{
//         pincode:800020,
//         city:"Patna"
//     }
// };
// const{address:adds}=obj;
// console.log(adds);

// const{address:{pincode}}=obj;
// const {arr:[first]}=obj;
// console.log(first);

// let user={
//     name:"Rohit",
//     amount:420,
//     greet:function(){
//         console.log("Hello dost ");
//     },
//     meet:function(){
//         return 20;
//     }
// }
// user.greet();
// console.log(user.meet());
 

// Prototype  
let obj={
    name:"Rohit",
   amount:420,
   greet:function(){
    return 10;
   }   
}

console.log(obj.toString())
// arr is an object
let arr=[2,3,6,1];
arr.push(10);








