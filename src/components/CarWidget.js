import React from "react";

import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CarWidget = (props) => {
  if (props.menu) {
    return (
      <div id="logocart">
        <NavLink to="/shop">
          <Badge badgeContent={2} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="item-list-container">
        <div className="center">
          <div className="item-list-container__contenedor">
            <div className="item-list-container__contenido">
              <h1 className="item-list-container__titulo"> Carrito </h1>

              <p className="item-list-container__descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisi vel pretium varius, nisl nunc egestas elit, sed
                semper erat nunc euismod nunc.
              </p>
              <p className="item-list-container__descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisi vel pretium varius, nisl nunc egestas elit, sed
                semper erat nunc euismod nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default CarWidget;
