import React from "react";
import logo from "../assets/images/react.svg";


import AccountMenu from "./NavBar_1";


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

      
        <AccountMenu/>

        <div className="clearfix"></div>
      </div>
    </header>
  );
};

export default Header;
