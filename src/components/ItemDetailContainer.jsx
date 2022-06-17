import React, { useEffect, useState } from "react";
import productos from "../database/products";
import customFetch from "../database/customfetch";
import ItemDetail from "./ItemDetail";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";


const ItemDetailContainer = (props) => {
  const [item, setItems] = useState([]);

  useEffect(() => {
    customFetch(3000, productos).then((data) => setItems(data));
  }, [item]);

  if (item.length === 0) {
    return (
      <div className="center">
        <Box sx={{ width: "100%" }}>
          <h2>Cargando Detalle Articulo... </h2>
          <LinearProgress />
          <br></br>
        </Box>
      </div>
    );
  } else {
    return (
      <>

        <ItemDetail />
      </>
    );
  }
};
export default ItemDetailContainer;
