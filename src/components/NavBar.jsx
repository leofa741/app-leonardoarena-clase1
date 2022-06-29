import {React} from "react";
import { NavLink } from "react-router-dom";
import CarWidget from "./CarWidget";
import BasicMenu from "./Menucategoria";
import { Box,IconButton  } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from "@mui/icons-material/Home";

const NavBar = (props) => {


  return (
    <>
   
         <Box  sx={{ display:{ xs:'none',sm:'block'}}} >
        <nav id="menu">
          <ul>
            <li>
              <NavLink to="/home">
                {" "}
                <HomeIcon sx={{ fontSize: 25, padding: -2 }} />
              </NavLink>
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
      <Box  sx={{ display:{ xs:'block',sm:'none'}}} >
        <nav id="menu">
          <ul>
         
            <li>
           
               <IconButton 
               onClick={props.clickcerrar}
             
               color="primary" aria-label="Menu" component="span">
               <MenuIcon></MenuIcon>
        </IconButton>
            </li>
          </ul>
        </nav>
      </Box>
    </>
  );
};

export default NavBar;
