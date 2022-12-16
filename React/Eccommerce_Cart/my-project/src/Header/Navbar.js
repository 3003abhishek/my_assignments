import React, { useEffect } from "react";
import  "./Navbar.css";
import { Link } from "react-router-dom";
import {useState} from "react";

function Navbar(){

    let [count,setCount]=useState(0);
    let [data,setData]=useState([]);

    let get_poducts_arr=async()=>{
        let res=await fetch(" http://localhost:8080/cart_products");
        res=await res.json();
        setData(res);
        setCount(res.length);
    }
    useEffect(()=>{
        get_poducts_arr();
    },[data]);
    return(
        <div className="header">
            <ul>
                <li><Link className="nav_tag" to="/">Shopping</Link></li>
            </ul>
            <ul>
                <li><Link className="nav_tag" to="/">Home</Link></li>
            </ul>
            <ul>
                <li><Link className="nav_tag" to="/cart">Cart <sup>{count}</sup></Link></li>
            </ul>
          
        </div>
    )
}
export default Navbar;