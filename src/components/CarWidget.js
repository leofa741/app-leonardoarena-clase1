import React from "react";
import logocart from "../assets/images/cart4.svg";
import {Link} from "react-router-dom";

const CarWidget = () => {

    return (

        <div id="logocart">
                  <img src={logocart} className="app-logo" alt="Logotipo"  /><span >2</span>
                   
                </div>

    );


  
   
}   
export default CarWidget;