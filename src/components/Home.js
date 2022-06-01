import React,{Component} from "react";
import{Link} from "react-router-dom";

const Home = () => {  
  
        return(
            <div className="home">
                <div className="home__contenedor">
                    <div className="home__contenido">
                        <h1 className="home__titulo">
                            Bienvenido al home del AppStore
                        </h1>
                        <p className="home__descripcion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                        </p>
                        <p className="home__descripcion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel pretium varius, nisl nunc egestas elit, sed semper erat nunc euismod nunc.
                        </p>
                        <Link to="/shop">Ir al Shop </Link>
                    </div>
                </div>
            </div>
        );
   
}

export default Home;