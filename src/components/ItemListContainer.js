import React,{Component} from "react";
import {Link} from "react-router-dom";

class ItemListContainer extends Component {
  render() {
    return (
      <div className="item-list-container">
        <div className="center">
          <div className="item-list-container__contenedor">
            <div className="item-list-container__contenido">
              <h1 className="item-list-container__titulo">
              {this.props.title}
              </h1>
              <p className="item-list-container__descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
              </p>
              <p className="item-list-container__descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
              </p>
              <Link to="/shop">Ir al Shop </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export  default ItemListContainer;