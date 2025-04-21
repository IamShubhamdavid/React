function Card(props){
    return(
        <div className="card"style={{border:"2px solid black",padding:"2px"}}>
            <img src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875135692-9.jpg" height="200px" width="200px"/>
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop now</h2>
                <h2>Price:{props.price}</h2>
            </div>
        </div>
    )
}

export default Card;