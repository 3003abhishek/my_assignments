import React from "react";
import { useState,useEffect} from "react";
import "./Cart.css";
function Cart(){

  let [cart_data,setCart_data]=useState([]);
    let get_cart_data=async()=>{
     let res=await fetch("http://localhost:8080/cart_products");
     res=await res.json();
     console.log(res);
     setCart_data(res);
    }

    let delete_items=async(id)=>{
      let res=await fetch(`http://localhost:8080/cart_products/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      });
      
    }

    useEffect(()=>{
     get_cart_data();
    },[cart_data]);
    return(
        <div className="cart_body">
      {
       cart_data.map((el)=>{
         return(
            <div > <h1>{el.title}</h1>
             <img src={el.img}/>
             <p>{el.price}</p>
             <button onClick={()=>delete_items(el.id)}>Delete</button>
            
            </div>
           
         )     
        
       
    

    
 })





      }






        </div>

           

        
     
    )
}

export default Cart;