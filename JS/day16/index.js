// reduce 
// const arr=[10,20,30,40,50];
//  const result=arr.reduce(callbackfunction,intitialization)
// acc accumulator, curr current
// const result= arr.reduce((acc,curr)=> acc=acc+curr,0);
//     // console.log(acc,curr);
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(result);

let arr=["orange","apple","grapes","apple","banana","orange"];
// final result ek object ke form 
// orange:2
// apple:2
// acc={}

// const result=arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//     acc[curr]=1;
//     return acc;
// },{})

const result=arr.reduce((acc,curr)=>{
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;
    return acc;
},{orange:2}) // yaha par jo assign krenge utna badh jayega 
console.log(result);

























