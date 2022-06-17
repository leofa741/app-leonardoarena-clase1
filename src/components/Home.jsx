import React from "react";

import {Link} from "react-router-dom";


const Home = () => {

  
  return(
      <div className="about">
          <div className="about__contenedor">
              <div className="about__contenido">
                  <h1 className="about__titulo">
                      Bienvenido al Home del  AppStore
                  </h1>         
              
                
                  <Link to="/shoppingcart">Ir al Shop </Link>
              </div>
          </div>
      </div>
  );

}

export default Home;
