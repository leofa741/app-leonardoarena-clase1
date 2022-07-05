import React from "react";
import { useState } from "react";
import {Button,IconButton,Box} from "@mui/material";

import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";



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
const ItemCount = ({ stock, initial, selecCant }) => {
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
    <Box>

      <ButtonGroup>
        <ThemeProvider theme={theme}>        
        <IconButton  color='rest' onClick={restar}>
            <RemoveCircleOutline />
          </IconButton>
          <p  >{count}</p>
        
          <IconButton color='Add' onClick={sumar}>
            <AddCircleOutline />
          </IconButton>
        </ThemeProvider>
      
      </ButtonGroup>
      <br />

      <Button   onClick={() => selecCant(count)} variant="contained" size="small"> Confirmar  </Button>

    </Box>
  );
};

export default ItemCount;
