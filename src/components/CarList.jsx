import React from 'react'

import { useContext } from "react";

import { UserContext } from "../context/context";
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';


export const CarList = () => {

  const {carrito} = useContext(UserContext);


  const marray = []

for (const [key, value] of Object.entries(carrito)) {
    marray.push([`${key}`, `${value}`])
}

console.log(marray)



  return (
    <>

{/* 
{
                carrito.map( product => (
                    <Grid container spacing={2} key={ product.name + product.size } sx={{ mb:1 }}>
                      
                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='body1'>{ product.title }</Typography>
                                <Typography variant='body1'>Talla: <strong>{ product.size }</strong></Typography>

                               
                                
                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant='subtitle1'>{ `$${ product.price }` }</Typography>
                            
                           
                        </Grid>
                    </Grid>
                ))
            } */}


    {/* <pre>


      {JSON.stringify(carrito,null,7)}

     

      </pre>  */}




     
       
          <div >
          <p>{marray[0]}</p>
            <p>{marray[1]}</p>
            <p>{marray[2]}</p>
            <p>{marray[3]}</p>
          </div>
       
     




    
    </>
 

  );
}


