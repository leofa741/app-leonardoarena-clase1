import React from 'react'
import { useState } from 'react';
import { UserContext } from './context'


export const CartProvider = ({children}) => {

    const [carrito, setcarrito] = useState([]);
    const [cantidad_total,setCantidadTotal]= useState(0)
    const [precio_total,setPrecioTotal]= useState(0)

    const  copia=[...carrito]



    





  return (

    <UserContext.Provider value={{count,setCount}}>

    { children }

    </UserContext.Provider>


    
  )
}
