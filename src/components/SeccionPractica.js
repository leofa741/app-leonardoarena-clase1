import React,{Component} from "react";

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
                        <a href="#" className="seccion-practica__boton">
                            Ir al Shop
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeccionPractica;