import { Link } from "react-router"

export default function RestCard({restInfo}){

    return(
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
        <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl ">{restInfo?.info?.name}</div>
        <div className="flex items-center gap-2">
            <svg
                className="w-6 h-6 text-green-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20"
             >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" />
            </svg>
        <span className="text-lg">{restInfo?.info?.avgRating}</span>
        <span className="text-lg">{restInfo?.info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-600 text-xl mt-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
        </div>
        </div>
        </Link>
    )
}