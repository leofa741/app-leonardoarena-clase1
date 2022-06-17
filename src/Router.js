import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import CarWidget from "./components/CarWidget";

import ItemDetailContainer from "./components/ItemDetailContainer";
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slider />

      <div className="center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/ItemListContainer" element={<ItemListContainer title=" Bienvenios a Nuestro E-Shop" />}/>
          <Route exact path="/shop" element={<CarWidget />} />
          <Route exact path="/producdetails/:id" element={<ItemDetailContainer  />} />
          <Route exact path="/category/:gender" element={<ItemListContainer  title="Catalogo de :" />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <div className="clearfix"></div>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
