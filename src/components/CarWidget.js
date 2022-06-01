import React from "react";
import logocart from "../assets/images/cart4.svg";
import {NavLink} from "react-router-dom";
import  { useState } from 'react';





var CarWidget = (props) => { 

  var [count, setCount] = useState(1); 
 
  if (props.menu ) {

return (

    <div id="logocart"  >
    <NavLink to="/shop"   >   <img src={logocart} className="app-logo" alt="Logotipo"  /><span>2</span></NavLink>            
        </div>
           
   );

  }
    else {
        return (
            <div className="item-list-container">
            <div className="center">
              <div className="item-list-container__contenedor">
                <div className="item-list-container__contenido">
                <h1 className="item-list-container__titulo">  Carrito    </h1>


            

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      sumar
      </button>
      <button onClick={() => setCount(count - 1)}>
      restar
      </button>
   
                  <p className="item-list-container__descripcion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                  </p>
                  <p className="item-list-container__descripcion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                  </p>
               
                </div>
              </div>
            </div>
          </div>
        );
    }


 


  
   
}   
export default CarWidget;