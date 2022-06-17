import * as React from 'react';
import {Link } from 'react-router-dom'

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';


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
     
       

        <MenuItem onClick={handleClose} component={Link} to={'category/men'}><ManIcon/></MenuItem>
   <MenuItem onClick={handleClose} component={Link} to={'category/women'}><WomanIcon/></MenuItem>
   <MenuItem onClick={handleClose} component={Link} to={'category/kid'}><BoyIcon/><GirlIcon/></MenuItem>
      </Menu>
    </div>
  );
}