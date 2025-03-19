import { useRouteError } from "react-router";

const Error =()=>{
    const err= useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOps Something went wrong</h1>
            <h2>{err.status}</h2>
        </div>
    )
}

export default Error;