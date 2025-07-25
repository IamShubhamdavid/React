import React, {useState,useMemo,useState} from "react";
import ReactDOM from "react-dom/client"

// Use Memo Hook
// 1: Counter button: increase
// 2: Input field: Fibonaci number
// 0 1 1 2 3 5 8 13 21 34

function App(){

    const [count,setCount] = useState(0);
    const [number,setNumber]= useState("")
    //const [result,setResult]= useState("");
    //counter

    function Fibonnaci(n){
        if(n<=1)
            return n;

        return Fibonnaci(n-1)+Fibonnaci(n-2);
    }

    // const Fibonnaci=useCallback((n)=>{
    //      if(n<=1)
    //          return n;

    //      return Fibonnaci(n-1)+Fibonnaci(n-2);
    //  }
    //  ,[]);


    // call back function
    // usememo ek render cycle ko bachata hai aur jaha hme calculation ko bachana h
    const result=useMemo(()=>Fibonnaci(number),[number]);

    // useEffect(()=>{
    //     setResult(Fibonnaci(number));
    // },[number]);

    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

        <div>
            <h2>Fibonnaci number is: {result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);






