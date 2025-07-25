import React, {useState,useMemo,useState,useRef} from "react";
import ReactDOM from "react-dom/client"

// function App(){

//     // useRef re render nhi krta h

//     const [count,setCount]=useState(0);
//     //let money=0;
//     const money=useRef(0);
//     //console.log(money.current);

//     return(
//         <>
//         <h1>Counter is: {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>

//         {/* display karane ke liye state variable jruri hai */}
//         <h1>Money is: {money.current}</h1>
//         <button onClick={()=>{
//             money.current=money.current+1
//             console.log(money.current);
//         }}>Increment</button>
//         </>
//     )
    
// }

// setInterval: setTime(time+1) call it after every second

function StopWatch(){

    const [time,setTime]=useState(0);
    const [isRunning , setIsRunning]=useState(false);
    const intervalRef = useRef(null);

    function start(){

        if(!isRunning){
        intervalRef.current=setInterval(()=>{
            setTime((prevTime)=>prevTime+1);
        },1000)
        setIsRunning(true);
    }
    }
    function stop(){
        if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setIsRunning(false);
        }
    }
    function reset(){

        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setTime(0);
    }


    return (
        <>
          <h1>StopWatch is:{time}</h1>
          <button onClick={start}>Start</button>
          <br></br>
          <br></br>
          <button onClick={stop}>Stop</button>
          <br></br>
          <br></br>
          <button onClick={reset}>Reset</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>);







