import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useMemo } from "react";
import ItemCount from "./ItemCount";
import productos from "../database/products";
import { useParams } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const ItemDetail = () => {
  const id = useParams().id;
  const product = productos[id];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={6}>
        <Slide easing="ease" duration={500} indicators={true}>
          {product.images.map((image) => {
            const url = `/images/${image}`;
            return (
              <div className={"eachslide"} key={image}>
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
          <ItemCount
            stock={product.inStock}
            initial={1}
            onAdd={() => {}}
          ></ItemCount>
        </Box>
        <Box sx={{ my: 3 }}>
          <Typography>{product.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
