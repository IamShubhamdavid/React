import {useState} from "react";

// export default function Increment({counts,setCounts}){

    export default function Decrement({counts,setCounts}){

    //const [counts,setCounts]=useState(0);

    return(
        <>
        
        <button onClick={()=> setCounts(counts-1)}>Decrement</button>
        </>
    )
}



