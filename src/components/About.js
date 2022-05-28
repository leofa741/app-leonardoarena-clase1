import React,{Component} from "react";

class About extends Component{

    render(){
        return(
            <div className="about">
                <div className="about__contenedor">
                    <div className="about__contenido">
                        <h1 className="about__titulo">
                            Bienvenido al About del  AppStore
                        </h1>
                        <p className="about__descripcion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                        </p>
                        <p className="about__descripcion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                        </p>
                        <p className="about__descripcion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                        </p>
                        <a href="#" className="about__boton">
                            Ir al Shop
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;