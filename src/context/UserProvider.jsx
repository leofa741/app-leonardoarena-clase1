import React from 'react'
import { useState } from 'react';
import { UserContext } from './context'


export const UserProvider = ({children}) => {

const [carrito,setCarrito]= useState([]);

const [cantidadtotal,SetCantidadTotal]= useState(0)

const [preciototal,SetPreciototal]= useState(0)


const agregarproducto= (producto,cantidad)=>{

  const copia=[...carrito]

  const nuevoproducto={
...producto,
cantidad:cantidad
  }
  copia.push(nuevoproducto)
  setCarrito(copia)
  SetCantidadTotal(cantidadtotal+cantidad)
  SetPreciototal(preciototal+cantidad*producto.price)

}

const eliminarproducto= (producto)=>{

 


}

const actualizarcantidad=(producto,cantidad)=>{


}

const vaciarcarrito=()=> {}

const valordelcontexto={
  carrit:carrito,
  cantidadtotal:cantidadtotal,
  preciototal:preciototal,
  agregarproducto:agregarproducto
}

  return (

    <UserContext.Provider value={{carrito, setCarrito}}>

    { children }

    </UserContext.Provider>


    
  )
}
 