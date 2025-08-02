const {sum,sub}= require("./second")



// CJS: common JS module

// behind the scene aise kaam krta h require wla part
// (function(){
//console.log("Hello world");
   // function sum(a,b){
   //     console.log(a+b);

   //     sum(3,4);
  //  }

//})

// sum(3,4); isko access nhi kr skte h kyuki ye private variable h
sum(3,4);
sub(7,9);
console.log("Hello ji");

// I need second.js code in my first.js file