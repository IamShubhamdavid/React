


export default function FoodCart({foodData}){


    return(
    <>
    <a href={foodData?.action?.link}>

    </a>
        <img className="w-40 h-50 object-cover"src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ foodData?.imageId }></img>

    </>
    )
}