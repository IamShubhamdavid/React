import React, {useState,useMemo,useState} from "react";
import ReactDOM from "react-dom/client"
import Increment from "./Increment"
import Decrement from "./Decrement"

function App(){

    const [count,setCount]=useState(0);


    return(
        <>
        <h1>Hello coder army</h1>
        {/* <h2>Parent Counter is: {count}</h2> */}
        {/* <Increment counts={count} setCounts={setCount}/> */}
        <Increment counts={count} setCounts={setCount}/>
        <Decrement counts={count} setCounts={setCount}/>

        </>
    )

}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
