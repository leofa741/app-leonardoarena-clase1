import React from "react";
import { NavLink } from "react-router-dom";
import CarWidget from "./CarWidget";
import { Box } from "@mui/material";
import BasicMenu from "./Menucategoria";

import HomeIcon from "@mui/icons-material/Home";

const NavBar = () => {

  return (
    <>
      <Box>
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
    </>
  );
};

export default NavBar;
