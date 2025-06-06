import  React ,{useState, useEffect} from "react";


function Colorful({name}){

    const [color,setColor]=useState("black");

    console.log('first');
    //console.log(name);


    // useeffect Callback function,dependency
    useEffect(()=>{
            console.log("UseEffect Executed");
            document.body.style.backgroundColor=color;
        },[color]); //dependency array dena jruri hai nhi to nhi execute krega

        // console.log("second");
    
        return (
            <>
            <h2>{name}</h2>
            <h1>Background Color changer</h1>
            <div className="but">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
            </div>
            </>
        )
    }

    // other type of Hook is "MEMO Hook"
    // jab aapke parents mein jyada change aa jaye tb "memo hook" use kre
    export default React.memo(Colorful);
    
    