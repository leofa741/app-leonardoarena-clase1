import React from 'react'
import { useState } from 'react';
import { UserContext } from './context'


export const UserProvider = ({children}) => {

const [count,setCount]= useState();



  return (

    <UserContext.Provider value={{count,setCount}}>

    { children }

    </UserContext.Provider>


    
  )
}
