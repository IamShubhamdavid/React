// let obj={};

// obj.name=20;
// // key value writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// //writable=true, value ko kya main change kar sktya hu
// obj.name="Mohit"
// //configurable =true

// let obj={}
// Object.defineProperty(obj,'name',{
//     value:"Rohit",
//     writable:true,  // hum value ko change kr skte hai
//     enumerable:true,
//     configurable:true,
// })

// // obj.name="mohit";
// Object.defineProperty(obj,"name",{
//     writable:false,
// })
// obj.name="mohit";
// console.log(obj);

// const obj1={
//     name:"rohit",
//     age:23,
//     account_number:1234
// };
// Object.defineProperty(obj1,'account_number',{
//     writable:false
// })

// obj1.account_number=12345;
// console.log(obj1.account_number);

// const customer={
//     name:"Rohit",
//     age:23,
//     account_number:123,
//     balance:2000,
// }

// name,account_number,change nhi hone chahiye
// Object.defineProperty(customer, "name",{
//     writable:false,
// })
//  customer.name="Mohit";
// // customer.account_number=1001;
// console.log(customer);


const customer={
    name:"Rohit",
    age:23,
    account_number:123,
    balance:2000,
}

let customer2=Object.create(customer);
customer2.city="Bihar" ;
customer2.place="Delhi";

Object.defineProperty(customer,"name",{
    enumerable:false,
})

// enumerable: jis bhi key nka enumerable true hoga , un sbka access hoga ya print hoga
// Inherit hoke bhi koi bhi property or key aati hai,uska enumerable true hua toh wo bhi print hoga
for(let key in customer2)
    console.log(key);

// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));

Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
})

for(let key in customer)
    console.log(key);
// for loop usko ho lega jiska true hoga enumerable


//define property
//define  Properties









