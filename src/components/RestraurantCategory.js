import { useState } from "react";
import ItemList from "./ItemList";

const RestrauantCategory =({data})=>{
//console.log(data);
const[showItems, setshoWItems]= useState(false);

const handleClick =()=>{
   // showItems=true;
    setshoWItems(!showItems);
}
    return(
        <div>
            {/* {Header} */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
                <div className="flex justify-center  cursor-pointer" 
                 onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span> 
                    <span>⬇️</span> 
                </div>
                <div>
                {showItems && <ItemList items={(data.itemCards)}/>}
                </div>
            </div>
        
            {/* {boody} */}
           
            
            
            
        </div>
    )
}

export default RestrauantCategory