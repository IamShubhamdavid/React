let a=10;
let b=a;
b=30;
console.log(b);
console.log(a);
// primitive data type vs Non primitive data type
// primitive data type: Immutable // stores in Stack or call by value
// ek ke baaad ek store hota hai and more faster than heap
// Non Primitive data type:Mutable // Stores in Heap or call by reference 
// randomn store hota hai


// Object example:

let obj1={
    id:20,
    naming:"Shubham"
}

let obj2=obj1;
obj2.id=30;
console.log(obj1);
console.log(obj2);













