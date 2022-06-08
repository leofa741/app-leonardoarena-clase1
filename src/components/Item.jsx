import React, { useState } from "react";
import {Box,Typography,Card,CardMedia,CardActionArea,Grid,} from "@mui/material";
import { useMemo } from "react";
import ItemCount from "./ItemCount";

function Item({ id, name, images, title, description, price, inStock }) {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered ? images[0] : images[1];
  }, [isHovered, images]);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <CardActionArea>
          <CardMedia component="img" image={productImage} alt={name} />
        </CardActionArea>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography>$:{price}</Typography>
        <Typography>{title}</Typography>
        <ItemCount stock={inStock} initial={1} onAdd={() => {}}></ItemCount>
      </Box>
     <br></br>
    </Grid>
            
  );
}
export default Item;
