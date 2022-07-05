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

      <Grid container spacing={3}>
        {marray.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={item[0]}
                title="Contemplative Reptile"
              />
              <Box p={2}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item[1]}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum odit? Eius
                </Typography>
                <Link href="#">Ver más</Link>
              </Box>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>


      

    
    </>
 

  );
}


