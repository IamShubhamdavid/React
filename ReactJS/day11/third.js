// export default function Third(props){
import GlobalContext from "./global"
import { useContext } from "react"


export default function Third(){

    const {count,setCount}=useContext(GlobalContext);

    return(

        <>
         {/* <h2>I am printing {props.count}</h2>
         */}
         <h2>I am printing {count}</h2>
        <button onClick={()=>setCount(count+5)}>Increment</button>
        </>
    )
}
