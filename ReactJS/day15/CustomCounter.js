import { useState } from "react"
import { useDispatch } from "react-redux"
import { Decrement,Increment,CustomIncreaser} from "react-redux"


export default function CustomCounter(){

    const[number,setNumber]=useState("")
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(CustomIncreaser(Number(number)));
        setNumber("");
    }


    return(
        <>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={handleClick}>Submit</button>
        
        </>


    )
}