import React from "react";
import {Link} from "react-router-dom";


const About = () => {

  
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
                        <Link to="/shop">Ir al Shop </Link>
                    </div>
                </div>
            </div>
        );
   
}

export default About;