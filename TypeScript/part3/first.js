"use strict";
const obj = {
    name: "Priya",
    age: 18,
    gender: "female"
};
const obj2 = {
    name: "Sneha",
    age: 19,
    balance: 420
};
;
const arr = [{ name: "Rohan", age: 18 }, { salary: 20, id: "2341" }];
//function in TS
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Ananya", 7);
//default parameter
function neet(msg = "Jit") {
    console.log(msg);
}
neet();
neet("Bittu");
//Optional parameter
function Gate(person) {
    console.log(person || "Mohan");
}
Gate("Mohit");
Gate();
//arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));
//callback function
function palceorder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
palceorder(10, (amount) => {
    console.log(amount);
});
//Rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(2, 3, 5, 7, 12, 10);
;
const obj8 = {
    name: "Marvi",
    age: 18,
    salary: "chillar",
    id: 241
};
