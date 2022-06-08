import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const theme = createTheme({
  palette: {
    Add: {
      main: "#C70039",
      contrastText: "#fff",
    },
    rest: {
      main: "#1041DC",
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
      <p> {count} </p>

      <ButtonGroup>
        <ThemeProvider theme={theme}>
          <Button color="Add" aria-label="reduce" onClick={() => restar()}>
            <RemoveIcon fontSize="small" />
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button color="rest" aria-label="increase" onClick={() => sumar()}>
            <AddIcon fontSize="small" />
          </Button>
        </ThemeProvider>
      </ButtonGroup>
      <br />

      <Button variant="contained" size="small">
        {" "}
        confirmar
      </Button>
    </div>
  );
};

export default ItemCount;
