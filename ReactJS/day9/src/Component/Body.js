import {useEffect,useState} from "react";
import useFetch from "../../useFetch";

function Body(){

    const {generateProfile,numberofProfile,setnumberofProfile,Profile}=useFetch();

    // usefetch bolta hia ki code ka main part alag likh lo
    // custom hook mein pehle body part render hoga uske baad useFetch function render hoga
    return(
        <div className="but">
            <input type="text" className="inpu" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile</button>

        <div className="profiles">
            {
                Profile.map((value)=>{

                     return (<div key={value.id} className="cards">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                    </div>)

                })
            }
        
        </div>
        </div>
    )

}

export default Body;
//Try catch functionality add karo
// Usecall back function add karne ki koshish
//Search button: Name ke basis: User profile exist, display kara de