import { Menu_Api } from "../Utils/Constants";
import { useState,useEffect } from "react";

const useRestraurantMenu =(resId)=>{
    const [restinfo,setresinfo]=useState(null);

    useEffect(
        ()=>{
            fetchMenu();
        },[]
    )

    const fetchMenu = async()=>{
        const data = await fetch(Menu_Api+resId);
        const json = await data.json();
        //console.log(json);
        setresinfo(json.data);
    }

    return restinfo;
}

export default useRestraurantMenu;