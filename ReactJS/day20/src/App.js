import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import FoodOption from "./FoodOption";
import GroceryOption from "./Grocery";
import DineOption from "./DineOption";
import Restaurant from "./Restaurant";

function App(){

    return(
       <>
       <Header></Header>
       <FoodOption></FoodOption>
       <GroceryOption></GroceryOption>
       <DineOption></DineOption>
       <Restaurant></Restaurant>
       </>
    )

}
        
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
