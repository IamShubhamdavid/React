import React,{useState} from "react"
import ReactDOM from 'react-dom/client'

//USe of Hooks 

function Counter(){

    let [count ,setCount]= useState(0); // useState hame return krke deta hai array
    // useState(0) ye humra intialize value hai 

    function incrementnumber(){
        //count=count+1;
        setCount(count+1);
        //console.log("count value is", count);
        // ye use krne se DOM manipulation hota hai
       // document.querySelector('h1').innerText=`Count is ${count}`;

    }
    function decrementnumber(){
        //count=count-1;
        setCount(count - 1);
        //console.log("count value is", count);
        // neeche wli use krna achi baat nhi hai
       // document.querySelector('h1').innerText=`Count is ${count}`;

    }
    return (
        <div className="first">
        <h1>Count is: {count}</h1>
        <button onClick={incrementnumber}>Increment {count}</button>
        <button onClick={decrementnumber}>Decrement {count}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)


