
import React from "react";
import { createRoot } from "react-dom/client";
import  Body  from "./component/Body";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import { Header } from "./component/Header";


const Applayout = () => {
  return(<>
 {
  <>
<Header></Header>
<Outlet></Outlet>

  </>}
  </> )
};


const Router=createBrowserRouter([{ path:"/",element:<Applayout></Applayout>,
  children:[
    {path:'/' , element:<Body></Body>},
    ]

}])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router}></RouterProvider>);