import { useState } from "react";
import { LOGO_URL  } from "../Utils/Constants";
import { Link } from "react-router";
import About from "./About";
import useOnlineStatus from "../Utils/useonlinestatus";
import { useSelector } from "react-redux";

const Header =()=>{
   
    const [btnName , updatebtn] = useState("Login");

    const onlinestatus = useOnlineStatus();

    //Subscribing to the store
    const cart = useSelector((store)=>{
        return store.cart.items
    }
        
    );

    return (
        <div className="flex justify-between bg-pink-200 shadow-lg mb-1">
            <div >
                < img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul  className="flex p-4 m-4 ">
                    <li className="px-4">Online Status : {onlinestatus ? "✅" : "❌"}</li>
                    <li className="px-4"><Link to="/"> Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contactus">Conatct Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cart.length} items)</Link></li> 
                    <li className="px-4" > <button className="login" onClick={()=>
                       btnName==="Login"? updatebtn("Logout"): updatebtn("Login")
                    }>{btnName}</button> 
                    </li> 
                </ul>
            </div>
        </div>
    )
}

export default Header;