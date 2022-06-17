import React, { useEffect, useState } from "react";
import productos from "../database/products";

import { customFetch, fetchProductByGender } from "../database/customfetch";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { gender } = useParams();
  console.log(gender);

  useEffect(() => {
    if (!gender) {
      customFetch(2000, productos).then((data) => setItems(data));
    } else {
      fetchProductByGender(500, gender).then((data) => setItems(data));
    }
  }, [gender]);

  if (items.length === 0) {
    return (
      <div className="center">
        <h1>
          {props.title}
          {gender}{" "}
        </h1>

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
        <h1>
          {props.title} {gender}{" "}
        </h1>

        <ItemList products={items} />
      </>
    );
  }
};
export default ItemListContainer;
