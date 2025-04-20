import React from "react";
import ReactDOM from "react-dom/client"


//Header
//Body
//Footer

function Card(props){
    return(
        <div style={{border:"2px solid black",padding:"2px"}}>
            <img src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875135692-9.jpg" height="200px" width="200px"/>
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop now</h2>
            </div>
        </div>
    )
}

const arr=[{cloth:"Tshirt",Offer:"20-40%off"},{cloth:"Pant", Offer:"30-50%off"},{cloth:"Kurta", Offer:"20-50%off"},{cloth:"Trouser", Offer:"40-60%off"},{cloth:"Shirt", Offer:"40-50%off"},{cloth:"Shoes", Offer:"60-80%off"}];

function App(){
    return(
        //Header
        //Body
        <div style={{display:"flex", gap:"10px",flexWrap:"wrap"}}>
            {/* <Card cloth="T-Shirt" offer="20-50%off"/>
            <Card cloth="Jeans" offer="40-80%off"/>
            <Card cloth="Kurta" offer="30-50%off"/>
            <Card cloth="Trouser" offer="40-60%off"/>
            <Card cloth="Pant" offer="30-50%off"/>
            <Card cloth="Shirt" offer="20-50%off"/>
            <Card cloth="Chaddi" offer="20-50%off"/> */}

            {
                arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)
            }
        </div>
        //Footer
    )
}



const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);









