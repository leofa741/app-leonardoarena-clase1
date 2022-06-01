import React from "react";
import logocart from "../assets/images/cart4.svg";
import {NavLink} from "react-router-dom";

const CarWidget = () => {

    return (

        <div id="logocart">
            <NavLink to="/shop">   <img src={logocart} className="app-logo" alt="Logotipo"  /><span >2</span></NavLink>
               
                   
                </div>

    );


  
   
}   
export default CarWidget;