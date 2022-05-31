import { Link } from "react-router-dom";
import React, { Component } from "react";

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <div className="center">
          <div className="shop__contenedor">
            <div className="shop__contenido">
              <h1 className="shop__titulo">
                Bienvenido al Shop del AppStore
              </h1>
              <p className="shop__descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
              </p>
              <p className="shop__descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
              </p>
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Shop;