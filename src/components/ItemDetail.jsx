import React from "react";


import ItemCount from "./ItemCount";
import productos from "../database/products";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid,Button} from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {SelectedSizes} from "./SelectedSizes";




const ItemDetail = () => {
  const id = useParams().id;
  const product = productos[id];

 const onAdd=(count)=>{
    console.log(count);
  const  cantidad = count;
  }
const agregarCarrito = () => {
  console.log("agregar al carrito");
}
  

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={6}>
        <Slide easing="ease" duration={900} indicators={true}>
          {product.images.map((img) => {
            const url = `/images/${img}`;
            return (
              <div className={"eachslide"} key={img}>
                <div
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${url})`,
                    width: "100%",
                  }}
                ></div>
              </div>
            );
          })}
        </Slide>

      
      </Grid>

      <Grid item xs={12} sm={6} md={8} lg={6}>
        <Box display="flex" flexDirection="column">
          <Typography>$:{product.price}</Typography>
          <Typography>{product.title}</Typography>
          <SelectedSizes SelectedSize={product.sizes[0]} sizes={product.sizes} ></SelectedSizes>
          
          <Typography
            variant="body2"                  
            color="textSecondary"
            component="p"
          >cantidad</Typography>
          <ItemCount
            stock={product.inStock}
            initial={1}
            onAdd={onAdd}  

           />
          <br />
        
          <br />
          <br />
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={agregarCarrito}
          >
            Agregar al carrito de compras
          </Button>
             </Box>
          
          <Box sx={{ my: 3 }}>
        
        
        </Box>
        <Box sx={{ my: 3 }}>
          <Typography>{product.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
