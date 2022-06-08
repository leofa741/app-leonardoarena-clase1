import React from 'react'
import { NavLink } from 'react-router-dom'
import CarWidget from './CarWidget'
import {Box} from '@mui/material'




const NavBar = () => {
  return (
    <>
 <Box sx={{display:{xs:'block' ,sm:'block'}}}>
    <nav id="menu">
  
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/ItemListContainer">Productos</NavLink>
        </li>
     
        <li>
          <CarWidget menu="true" ></CarWidget>
        </li>

      
      </ul>
    </nav>

    </Box>
   
      </>
  );
};

export default NavBar;