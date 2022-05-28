import React,{Component} from "react";

class Home extends Component{   
    render(){
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
                        <a href="#" className="home__boton">
                            Ir al Shop
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
