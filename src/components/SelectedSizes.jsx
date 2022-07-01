import React from "react";
import { Button, Box } from "@mui/material";






export const SelectedSizes = ({sizes,SelecSize}) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button key={size} size="small"  onClick={()=>SelecSize(size)  }  >
          {size}
        </Button>
      ))}
    </Box>
  );
};
