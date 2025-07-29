import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add"

//state variable key ke sath aatach rehta hai across re render

// Ek bhut bada myth ye hai ki JAva Script code ko baar baar refresh ya phir re render  krta hai lekin ye glt hai
// kyuki React bas apne DOM mein change krta hia aur at the end sab kaam ko JS hi krega 

// Virtual DOM light weight hota h aur Real DOM heavy weight hota h
// Proof: 
// const VDom=<h1>Hello VCoder army</h1>

//    const RDom=document.createElement('h1');
//    RDom.innerText="Hello Coder army";


function App(){

    const [language,setLanguage]= useState(["TS","JS","Java"])

    function handleClick(){
        setLanguage(["C++",...language]);
    }

    return(
        <>
        <div style={{display:"flex",justifyContent:"center", gap:"20px",marginTop:"50px"}}>
        {
            // key ko index dene se agr hmlog kuch new add krte toh wo value ek dusre ke le lega
            // key={index} ---> isese glt value aayega add krne pr kyuki state variable fix ho jata h
            language.map((value,index)=> <Add key={value} value={value}></Add>)
            // ab isme add krne pr sahi anss dega kyuki Key check krega ki wo pehle tha ki nhi agr 
            // nhi present tha tb zero hoga else old value will show
        }

        </div>

        <br></br>
        <br></br>
         <br></br>
        <br></br>
        <button onClick={handleClick}>Add language</button>
        
       
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
