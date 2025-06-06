import {useEffect,useState} from "react";

function Body(){

    const [Profile,setProfile]=useState([]);
    const [numberofProfile,setnumberofProfile]=useState("");

    async function generateProfile(count){
        const ran=Math.floor(1+Math.random()*1000);
        const response= await fetch(`https://api.github.com/users?since=${ran}per_page=${count}`);
        const data= await response.json();

        setProfile(data);
    }

    useEffect(()=>{
        generateProfile(10);
    },[])

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