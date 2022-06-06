import React from "react";
import logo from "../assets/images/react.svg";


import NavBar from "./NavBar";



const Header = () => {


  

  
        return (
          <header id="header">
            <div className="center">
              <div id="logo">
                <img src={logo} className="app-logo" alt="Logotipo" />
                <span id="brand">
                  <strong>App</strong>Store
                </span>
              </div>
             
              <NavBar></NavBar>
            

              <div className="clearfix"></div>
            </div>
          </header>
        );
   
}

export default Header;