import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Colorful from "./Component/colorful";

// Background color changer
// re-render: Call the function again
//UseEffect Hook

function Main(){

    const [count,setCount]=useState(0);

    return (
        <>
        <div className="counter">
        <h1>Counter is :{count}</h1>
        <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"blue"}}>Increment</button>
        </div>
        <Colorful name={count}></Colorful> 
        </>
    )
    // <Colorful></Colorful>  ye ek tarah ka function call hai
    // Increment ko increase krte hi first/render ka value increse hota jayega kyuki wo function call ho rha hai


    // const [color,setColor]=useState("black");

    // // Ye bas primitive value ke liye 2 baar render krta hai eg:"red"
    // // Object ko ye treat krta hai as a reference
    // console.log("render");

    // //useEffect(Callback Function,dependency)
    // //useEffect hmare code mein sbse last mein execute krta hai  
    // useEffect(()=>{
    //     console.log("UseEffect Executed");
    //     document.body.style.backgroundColor=color;
    // },[color]); //dependency array dena jruri hai nhi to nhi execute krega

    // return (
    //     <>
    //     <h1>Background Color changer</h1>
    //     <div className="but">
    //         <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
    //         <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
    //         <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
    //         <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
    //         <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
    //     </div>
    //     </>
    // )
}




ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);
 