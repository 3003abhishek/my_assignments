import React from "react";
function Card_details({value}){
    let handleClick=async(value)=>{
        let res=await fetch(" http://localhost:8080/cart_products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({"id":value.id,"title":value.title,"img":value.img,"price":value.price})
        });

        console.log(value);
    }




    return(
     <div key={value.id} className="card_details">
        <h1>{value.title}</h1>
        <img src={value.img} alt="not_found"/>
        <p>Price:{value.price}</p>

        <button onClick={()=>handleClick(value)}  >Add to Cart</button>
        

     </div>

    )
}

export default Card_details;