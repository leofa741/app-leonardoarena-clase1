import React from "react";
import { NavLink } from "react-router-dom";
import CarWidget from "./CarWidget";
import { Box, Button } from "@mui/material";
import BasicMenu from "./Menucategoria";
import { createTheme, ThemeProvider } from "@mui/material/styles";


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
              <Button>             
                <NavLink to="/home">Home</NavLink>
              </Button>
            </li>
            <li>
              <Button>             
                <NavLink to="/about">About</NavLink>
              </Button>
            </li>
            <li>
              <Button>            
                <NavLink to="/ItemListContainer">Products</NavLink>{" "}
              </Button>
            </li>

            <li>
              <BasicMenu />
            </li>
            <li>
            <ThemeProvider theme={theme}>
              <Button 
                color='Add'  
              >               
                <CarWidget menu="true" />{" "}
              </Button>
              </ThemeProvider>
            </li>
          </ul>
        </nav>
      </Box>
    </>
  );
};

export default NavBar;
