import {useState} from "react";
import Decrement from "./Decrement";

// export default function Increment({counts,setCounts}){

    export default function Increment({counts,setCounts}){

    //const [counts,setCounts]=useState(0);

    return(
        <>
        <h2>Child Counter is {counts }</h2>
        <button onClick={()=> setCounts(counts+1)}>Increment</button>
        </>
    )
}

