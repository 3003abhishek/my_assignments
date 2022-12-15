import React from "react";
import { Routes,Route } from "react-router-dom";
import Cart from "../Components/cart";
import Home from "../Components/home";

function Allroutes(){
   return(
    <>

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
    </>
   )
}

export default Allroutes;