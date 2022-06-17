import React from "react";
import { Box, Typography, Grid,Button,IconButton} from "@mui/material";

import ItemCount from "./ItemCount";
import productos from "../database/products";
import { useParams } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {SelectedSizes} from "./SelectedSizes";




const ItemDetail = () => {
  const id = useParams().id;
  const product = productos[id];

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

        <br></br>
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
            onAdd={() => {}}
          >

          </ItemCount>

      
        

     
          </Box>
          
          <Box sx={{ my: 2 }}>
          <Button variant="contained" size="small">Terminar Compra</Button>
        </Box>
        <Box sx={{ my: 3 }}>
          <Typography>{product.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
