import React from "react";
import { Button, Box, Typography } from "@mui/material";

export const SelectedSizes = (props) => {
  return (
    <Box>
      {props.sizes.map((size) => (
        <Button key={size} size="small"     >
          {size}
        </Button>
      ))}
    </Box>
  );
};
