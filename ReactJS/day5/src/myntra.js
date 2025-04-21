import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./component/utils/dummy";
import {greet} from "./component/utils/dummy"

const arr=[{cloth:"Tshirt",Offer:"20-40%off"},{cloth:"Pant", Offer:"30-50%off"},{cloth:"Kurta", Offer:"20-50%off"},{cloth:"Trouser", Offer:"40-60%off"},{cloth:"Shirt", Offer:"40-50%off"},{cloth:"Shoes", Offer:"60-80%off"}];

// console.log(arr);

function App(){

    let [A, setA]=useState(arr);

    function sortArray(){
        A.sort((a,b)=> a.price-b.price);
        setA([...A]);
       //console.log(A);

    }
    function priceAbove499(){
        const B=arr.filter((value)=>value.price>499);
        setA(B);
    }

    return(<>
        <Header/>
        <button onClick={sortArray}>Sort by price</button>
        <button onClick={priceAbove499}>Price above 499</button>
        <div className="middle" style={{display:"flex", gap:"10px",flexWrap:"wrap"}}>
            
            {
                A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price}/>)
            }
        </div>
        <Footer/>
        </>
    )
}
// React humara most efficent way mein DOM ko manipulate krta hai aur mijhe apna sirf UI banane mein focus rkhna chahiye
const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
