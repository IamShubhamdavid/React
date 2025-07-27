import Third from "./third"
import GlobalContext from "./global"
import { useContext } from "react"

// props or count,setcount
// export default function Second(props){
export default function Second(){

     const {count,setCount}=useContext(GlobalContext);

    return(

        <>
         <h2>Kaise hai aap sab log {count}</h2>
         <Third />
        </>
    )
}


