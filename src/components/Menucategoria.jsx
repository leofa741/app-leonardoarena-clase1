import * as React from 'react';
import {Link } from 'react-router-dom'

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';



const theme = createTheme({
    palette: {
      Add: {
        main: "#C70039",
      
      },
     
    },
  });


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
           <ThemeProvider theme={theme}>
      <Button   
      color='Add'    
        onClick={handleClick}
        to="#"     
      >
      Catalog
      </Button>
      </ThemeProvider>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
     
       

        <MenuItem onClick={handleClose} component={Link} to={'category/men'}>Men</MenuItem>
   <MenuItem onClick={handleClose} component={Link} to={'category/women'}>Women</MenuItem>
   <MenuItem onClick={handleClose} component={Link} to={'category/kid'}>Kids</MenuItem>
      </Menu>
    </div>
  );
}