import React,{Component} from "react";
import {BrowserRouter ,  Routes,Route} from "react-router-dom";
import SeccionPractica from "./components/SeccionPractica";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
class Router extends Component{

    render(){
        return(
           <BrowserRouter>

<Header></Header>
<Slider></Slider>
<div className="center">
           <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/practica" element={<SeccionPractica/>} />
                <Route path="*" element={<Error/>} />


           </Routes>      
           <div className="clearfix"></div>
</div>

<Footer></Footer>

   
           </BrowserRouter>



           
        );
    }
}

    export  default Router;