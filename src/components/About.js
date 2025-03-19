import { useEffect } from "react";
import UserClass from "./UserClass";

const About=()=>{

    useEffect(()=>{
        console.log("ue in");

        return ()=>{
            console.log("useeffect ended");
        }
    },[])
    
    
    

    return(
        <div>
           <h1>About us</h1>
           <h2>This is React webs series</h2>
           <UserClass name={"Siva Rama Rao"}/>
        </div>
    )
}

export default About;