import React from 'react'
import { useState } from 'react';
import { UserContext } from './context'


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [user, setUser] = useState(null);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        setTotal(total + product.price);
    }

    const removeFromCart = (product) => {
        const newCart = cart.filter(item => item.id !== product.id);
        setCart(newCart);
        setTotal(total - product.price);
    }

    const setUserData = (user) => {
        setUser(user);
    }

    


        





  return (

    <UserContext.Provider value={{count,setCount}}>

    { children }

    </UserContext.Provider>


    
  )
}
