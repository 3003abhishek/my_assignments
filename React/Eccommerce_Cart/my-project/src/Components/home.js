import React, { useEffect } from "react";
import { getData } from "./fetchData";
import { useState } from "react";
import Navbar from "../Header/Navbar";
import Body from "./Body";
function Home(){

    let [product_data,setProduct_data]=useState([]);
   let exact_data=async()=>{
     let data=await getData();
     setProduct_data(data);
    //  console.log(data);
   }
  
   useEffect(()=>{
    exact_data();
    // console.log(product_data);
   },[]);


  
  
   

    return(
   <div>

    <Navbar/>
    <Body value={product_data}/>
   </div>
    )
}
export default Home;