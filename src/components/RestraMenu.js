import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestraurantMenu from "../Utils/useRestrmenu";
import RestrauantCategory from "./RestraurantCategory";



const RestraMenu =()=>{
    const{ resId} = useParams();

    const restinfo =useRestraurantMenu(resId);

    if(restinfo===null){
        return <Shimmer/>;
    }
    const {name,cuisines, costForTwoMessage}=restinfo?.cards[2]?.card?.card?.info;

    const names =
    restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //it.card.info.price
    //console.log(restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =
    restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"        
    )
    //console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {
                categories.map((category)=>(
                    <RestrauantCategory key={category?.card?.card.title} data={category?.card?.card}/>
                )

                )
            }

            
            

            {/* <h2>Menu</h2>
            <ul>
                {names.itemCards.map((it)=>
                <li key={it.card.info.id}> 
                    {it.card.info.name}
                    
                </li>)}  
                
            </ul> */}
            <div></div>
        </div>
    )
}

export default RestraMenu;