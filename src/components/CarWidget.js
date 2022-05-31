import React,{Component} from "react";
import logo from "../assets/images/react.svg";
import {Link} from "react-router-dom";

class CarWidget extends Component {

    render() {
        return (

            <div className="car-widget">
                <div className="center">
                    <div className="car-widget__contenedor">
                        <div className="car-widget__contenido">
                            <h1 className="car-widget__titulo">
                                Bienvenido al Carrito de Compras
                            </h1>
                            <p className="car-widget__descripcion">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                            </p>
                            <p className="car-widget__descripcion">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                            </p>
                       
                        </div>
                    </div>

                </div>
            </div>

         
           

        );
    }
}   
export default CarWidget;