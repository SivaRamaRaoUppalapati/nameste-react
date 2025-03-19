import RestroCard ,{RestrocardPromoted} from "./RestroCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useonlinestatus";



const Body =()=>{

    //Resra_URL
    const [listofres, setListofResta] = useState([]);

    const[searchres,setsearchres]=useState([]);

    const [searchtext,setsearchtext]= useState("");

    //console.log(listofres);

    const RestraCardPromoted = RestrocardPromoted(RestroCard);

    useEffect(()=>{
        fetchdatas();
    },[]);

    const fetchdatas = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4485835&lng=78.39080349999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const  datajson = await data.json();
       // console.log(datajson?.data?.cards[1].card?.card?.gridElements?.infoWithStyle);
        setListofResta(datajson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setsearchres(datajson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const onlinestatus=useOnlineStatus();
   // console.log(onlinestatus);
   //console.log(listofres);
    if(onlinestatus===false)
        return(
            <h1>Looks like you are offline!!</h1>
        )
    

    return listofres.length===0 ? <Shimmer/> :(

        <div className="body">
            <div className="flex">
                <div className=" m-4 p-4 ">
                    <input type="text" 
                    data-testid="searchInput"
                    className="boarder boarder-solid" value={searchtext} 
                    onChange={
                        (e)=> setsearchtext(e.target.value)
                    }
                  />
                    <button className="px-4 bg-green-200 m-3 rounded-lg" onClick={()=>{
                       // console.log(searchtext);
                       const filterres=listofres.filter(res=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
                       setsearchres(filterres);                         
                    }}>Search</button>
                </div>
                
                <button className="px-4" onClick={()=>
                    { const ft =listofres.filter(fr=>fr.info.avgRating>4.4);
                    // console.log(ft);
                     setListofResta(ft);
                    }}>Top Rated Restraurant</button>
                
            </div>
            <div className="flex flex-wrap space-x-1.5">
                   {searchres.map(resl => <Link to ={"restraurants/"+resl.info.id}>
                   {/* /* {
                    resl.data.promoted ? RestraCardPromoted : <RestroCard key={resl.info.id} resdata={resl}/>
                   } */ }
                   <RestroCard key={resl.info.id} resdata={resl.info}/>
                   </Link>
                   )};         
            </div>
        </div>
    )
}

export default Body;