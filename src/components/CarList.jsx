import React from 'react'
import productos from '../database/products'
import { Typography} from "@mui/material";


const productsInCart=[
    productos[0],
    productos[1],
    productos[2],
]



export const CarList = () => {
  return (
    <>
    {
        productsInCart.map(produ => {
            <Typography  >{produ.name}mm</Typography>




        })

    }
    
    
    </>    
  )
}
