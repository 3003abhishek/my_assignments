import React from "react";
import Card_details from "./Card_details";
import "./Body.css";
function Body({value}){
//    console.log(value);
    
    return(
    <div className="body">
        {

value.map((el)=>{

    return (

        
        <Card_details value={el}/>
    )
})
        }


    </div>
        
    
    )
}
export default Body;