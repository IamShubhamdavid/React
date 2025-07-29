import { useState } from "react";
import FoodCart from "./FoodCart";

const FoodItems = [
    {id:1,food:'Pizza',Price:"200"},
    {id:2,food:'Pizza',Price:"200"},
    {id:3,food:'Pizza',Price:"200"},
    {id:4,food:'Pizza',Price:"200"},
    {id:5,food:'Pizza',Price:"200"},
    {id:6,food:'Pizza',Price:"200"},
    {id:7,food:'Pizza',Price:"200"},

];


export default function Card(){

        const [inCart,setInCart]=useState(false);
        function handClick(){
            if(inCart){
                setInCart(false);
            }
            else{
                setInCart(true);
            }
        }

        return(

            <div style={{display:"flex",justifyContent:"center", flexWrap:"wrap",gap:"2px"}}>
                {FoodItems.map((value)=>{
                    return(
                        <div key={value.id}>
                        <FoodCart value={value}></FoodCart>
                        </div>
                    )
                })}
            </div>
        )

}