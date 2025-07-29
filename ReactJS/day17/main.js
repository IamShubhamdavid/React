import React from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add"

const arr=[0,1,2,3];

function App(){

    return(
        <>
        {arr.map((value)=><Add key={value}></Add>)}
        
        {/* <Add></Add>
        <Add></Add>
        <Add></Add>
        <Add></Add> 
        
        yaha pr key ka use hoga kyuki hmko pata hi nhi chl payega ki kisko increase krna hoga */}
        
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
