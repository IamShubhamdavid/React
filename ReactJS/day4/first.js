import React from "react";
import ReactDOM from "react-dom/client"

const element1=<h1>Hello Coder Army</h1>
//JSX : JS Expression (Output laake de: Result produce)
//JSX : JS statement (Unko aap nahi likh skte hai) eg: let x=2; 


//const arr=[20,40,"Rohit",10]

function Greet(props){
    return <h2>Ram Ram Bhiaya ji {props.name}{props.age} </h2>
};
// props={
//     name:"Rohit negi",
//     age:"23"
// }

// JSX ka rule hai ki function ka starting Capital se hona chahiye
// React mein hmlog function ka name kuch bhi de skte hai
const element2= <Greet name="Rohit negi" age="23"/>

const element3=<h1 id="first" className="Second"></h1>

// <Greet/>: Function call

// Result produce hona chahiye: string,number,array
const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(element2);




