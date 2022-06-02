import React from "react";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";



const ItemListContainer = (props) => {

    return (

<> 
<h1>{props.title} </h1>
<div className="item-list-container">
            <div className="center">

    <ItemCount stock={5} initial={1} onAdd={()=>{}}></ItemCount>
      
  
        </div>
        </div>
        <Link to="/shop">Ir al Shop </Link>
        </>
    );

}
export  default ItemListContainer;