import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material";
import { useMemo } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function Item({ id, name, images, title, description, price, inStock }) {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered ? images[1] : images[0];
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
        <Link to={`/producdetails/${id}`}>
          <CardActionArea>
            <CardMedia component="img" image={productImage} alt={name} />
          </CardActionArea>
          <Box sx={{ mt: 1 }} className="fadeIn">
            {isHovered ? (
              <Typography>Ver Producto</Typography>
            ) : (
              <Typography>Máss...</Typography>
            )}
          </Box>
        </Link>
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
