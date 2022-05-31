import React,{Component} from "react";
import {Link} from "react-router-dom";

class SeccionPractica extends Component{

    render(){

        return(
            <div className="seccion-practica">
                <div className="seccion-practica__contenedor">
                    <div className="seccion-practica__contenido">
                        <h1 className="seccion-practica__titulo">
                            Seccion de práctica
                        </h1>
                        <p className="seccion-practica__descripcion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                        </p>
                        <Link to="/shop">Ir al Shop </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeccionPractica;