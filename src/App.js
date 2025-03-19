import React,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//import Body from "./src/components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestraMenu from "./components/RestraMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
//import Grocery from "./components/Grocery";
//import './index.css'
import { Provider } from "react-redux";
import appStore from "./Utils/appstore";
import Body from "./components/Body";
import Cart from "./components/Cart";
//import Cart from "./components/Cart";

const Grocery =lazy(()=> import("./components/Grocery"));

const AppLayout =()=>{
    return  (
      <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
      </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },{
        path: "/contactus",
        element:<Contact/>
      },{
        path: "/restraurants/:resId",
        element:<RestraMenu/>
      },{
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },{
        path:"/cart",
        element :<Cart/>
      }
    ],
    errorElement:<Error/>
  }
 
]
)


const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);