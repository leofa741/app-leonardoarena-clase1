import React,{Component} from "react";

class Error extends Component{

    render(){
        return(
            <div className="error">
                <div className="error__contenedor">
                    <div className="error__contenido">
                        <h1 className="error__titulo">
                            Error 404
                        </h1>
                        <p className="error__descripcion">
                            La pagina que buscas no existe
                        </p>
                        <a href="#" className="error__boton">
                            Ir al Home
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}   
export default Error;