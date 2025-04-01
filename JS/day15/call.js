// call by function

// function names(fun){
//     console.log("Hello I am Boy");
//     fun();
// }

// function greet(){
// const greet=function(){
//     console.log("I am call back function");
// }
// names(greet);

// function ke andar hmlog as a arguments pass kr rhe hai usi ko bolte hai  

// names(()=>{
//     console.log("I am Call back function");
// });


// function fetchData(){
//     // bhut saara 
//     console.log("I am fetching data");
// }

// setInterval(fetchData,2000);
 
// Ek functiuon banaya uske andar dusrre wlao ko bhej diya 

// forEach    ye expect krta hai ek call back function

// let arr=[10,20,30,40];
// single argument :number
//second index
//third:array ko bhi pass
// arr.ForEach(CallBackFunction)
// const greet=function greet(num){
//     console.log(num);
// }
// arr.forEach(greet);

// arr.forEach((num,index,a) =>{    //console.log(num,index));
//     a[index]=num*2;
// });
// console.log(arr);


// filter
// let arr=[10,20,30,35,40];
// const result=arr.filter((num)=> num%2==0);
//     // return true or false
// console.log(result);


// const students=[
//     {name:"Shubham",age:20,marks:70},
//     {name:"Rohit",age:25,marks:80},
//     {name:"Shreya",age:32,marks:50},
//     {name:"Mohit",age:22,marks:90},
// ]

// const result=students.filter((value)=> value.marks>50);
// const result=students.filter((obj)=>{
//     return obj.marks>50;
// })
// console.log(result);

// forEach ke andar hmlog ko function mein hi change krna padega  
// result ke andar change value ko store nhi krta hai or return nhi leta hai


// map 
//  map ke andar hmlog change kiya value bhi store krte hai 

// isme result mein change value ko store kr skrte hai
// const arr=[1,2,3,4,5]
// const result=arr.map((num)=>num*num);
// console.log(result);

const arr=[1,2,3,4,5];
const result=arr.filter((num)=>num%2==0).map((num)=> num*num);
console.log(result);

// Reduce ,











