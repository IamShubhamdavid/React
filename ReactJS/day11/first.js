import React, {useState,useMemo,useState} from "react";
import ReactDOM from "react-dom/client"
import Second from "./second";
import GlobalContext from "./global"
import { useContext } from "react"

function App(){

    const [count,setCount]=useState(10);

     //const data=useContext(GlobalContext);

    return(
        <>
        <GlobalContext.Provider value={{count,setCount}}>
        <h1>Hello coder army </h1>
        <Second count={count} setCount={setCount}/>
       </GlobalContext.Provider>
        </>
    )

}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
