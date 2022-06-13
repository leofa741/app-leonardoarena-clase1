import React from "react";
import { useState } from "react";
import {Button,IconButton} from "@mui/material";

import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { Icon } from "@mui/material";

const theme = createTheme({
  palette: {
    Add: {
      main: "#C70039",
      contrastText: "#fff",
    },
    rest: {
      main: "#008000",
      contrastText: "#fff",
    },
  },
});
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div>
    

      <ButtonGroup>
        <ThemeProvider theme={theme}>

        
        <IconButton  color='rest' onClick={restar}>
            <RemoveCircleOutline />
          </IconButton>
          <p> {count} </p>
          <IconButton color='Add' onClick={sumar}>
            <AddCircleOutline />
          </IconButton>
        </ThemeProvider>

     
      </ButtonGroup>
      <br />

      <Button variant="contained" size="small">
 
       Comprar
      </Button>
    </div>
  );
};

export default ItemCount;
