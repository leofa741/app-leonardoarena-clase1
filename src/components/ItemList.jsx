import React from "react";

import Item from "./Item";
import { Grid } from "@mui/material";

function ItemList({ products }) {
  return (
    <Grid container spacing={4}>
      {products.map((prod) => (
        <Item
          key={prod.name}
          id={prod.id}
          name={prod.name}
          images={prod.images} 
          description={prod.description}
          price={prod.price}
          title={prod.title}
          inStock={prod.inStock}
          gender={prod.gender}
        />
      ))}
    </Grid>
  );
}

export default ItemList;
