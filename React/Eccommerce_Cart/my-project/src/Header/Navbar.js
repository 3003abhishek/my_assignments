import React from "react";
import  "./Navbar.css"
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div className="header">
            <ul>
                <li><Link className="nav_tag" to="/">Shopping</Link></li>
            </ul>
            <ul>
                <li><Link className="nav_tag" to="/">Home</Link></li>
            </ul>
            <ul>
                <li><Link className="nav_tag" to="/cart">Cart <sup>1</sup></Link></li>
            </ul>
          
        </div>
    )
}
export default Navbar;