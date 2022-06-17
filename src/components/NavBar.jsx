import React from "react";
import { NavLink } from "react-router-dom";
import CarWidget from "./CarWidget";
import { Box, Button } from "@mui/material";
import BasicMenu from "./Menucategoria";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeIcon from '@mui/icons-material/Home';


const theme = createTheme({
  palette: {
    Add: {
      main: "#005c25",    
    },   
  },
});

const NavBar = () => {
  return (
    <>
      <Box>
        <nav id="menu">
          <ul>
            <li>
                         
                <NavLink to="/home"> <HomeIcon /></NavLink>
              
            </li>
            <li>
                        
                <NavLink to="/about">About</NavLink>
             
            </li>
            <li>
                     
                <NavLink to="/ItemListContainer">Products</NavLink>{" "}
            
            </li>

            <li>
              <BasicMenu />
            </li>
            <li>
         
                         
                <CarWidget menu="true" />{" "}
           
            
            </li>
          </ul>
        </nav>
      </Box>
    </>
  );
};

export default NavBar;
