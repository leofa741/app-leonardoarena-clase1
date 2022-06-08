import React, { useEffect, useState } from "react";

import productos from "../database/products";
import customFetch from "../database/customfetch";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    customFetch(3000, productos).then((data) => setItems(data));
  }, [items]);

  if (items.length === 0) {
    return (
      <div className="center">
        <h1>{props.title} </h1>
        <Box sx={{ width: "100%" }}>
          <h2>Cargando Articulos... </h2>
          <LinearProgress />
          <br></br>
        </Box>
      </div>
    );
  } else {
    return (
      <>
        <h1>{props.title} </h1>

        <ItemList products={items} />
      </>
    );
  }
};
export default ItemListContainer;
