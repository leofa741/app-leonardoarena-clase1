import React from 'react'
import  { useState } from 'react';



const ItemCount = ({stock, initial,onAdd}) => {



    const [count, setCount] = useState(initial); 

    const sumar = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };

    const restar = () => {
      if (count > initial) {
        setCount(count - 1);
      }
    };


  return (
   

    <div className="item-list-container">
    <div className="center">

    <p>Productos : {count} </p>

    <button   onClick={() => sumar()}>
    sumar
    </button>
    <button  onClick={() => restar()}>
    restar
    </button>
    <button  >
  confirmar
    </button>

    </div>
    </div>
 






  )
}

export default ItemCount