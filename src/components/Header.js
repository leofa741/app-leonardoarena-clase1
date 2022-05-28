import React,{Component} from "react";
import logo from "../assets/images/react.svg";
import {NavLink} from "react-router-dom";

class Header extends Component {

    render() {
        return (
         
            <header id="header">
            <div className="center">
            
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>App</strong>Store
                    </span>
                </div>
                
            
                <nav id="menu">
                    <ul>
                        <li>
                            
                            <NavLink to="/home"  >Home</NavLink>
                         
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                          
                        </li>                       
                        <li>
                            <NavLink to="/practica">Practica</NavLink>
                          
                        </li>
                                                   
                    </ul>
                </nav>

             
                <div className="clearfix"></div>
            </div>
        </header>

        );
    }
}

export default Header;