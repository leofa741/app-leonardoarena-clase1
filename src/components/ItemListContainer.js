import React from "react";
import {Link} from "react-router-dom";



const ItemListContainer = (props) => {

    return (

<> 
<h1>{props.title} </h1>

<div className="cards">
        <div className="card">ONE</div>
        <div className="card">TWO</div>
        <div className="card">THREE</div>
        <div className="card">FOUR</div>
        <div className="card">FIVE</div>
        <div className="card">SIX</div>
        <div className="card">SEVEN</div>
        <div className="card">EIGHT</div>
        <div className="card">NINE</div>
        <div className="card">TEN</div>
        <div className="card">ELEVEN</div>
        <div className="card">TWELVE</div>
        </div>
        <Link to="/shop">Ir al Shop </Link>
        </>
    );

}
export  default ItemListContainer;