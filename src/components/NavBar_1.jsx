import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import CarWidget from "./CarWidget";
import BasicMenu from "./Menucategoria";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import WcIcon from '@mui/icons-material/Wc';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display:{ xs:'none',sm:'block'}}}>
      <nav id="menu">
          <ul>
            <li>
              <NavLink to="/home">
                {" "}
                <HomeIcon sx={{ fontSize: 25, padding: -2 }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/ItemListContainer">Products</NavLink>{" "}
            </li>

            <li>
              <BasicMenu />
            </li>
            <li>
              <CarWidget menu="true" />{" "}
            </li>
           
          </ul>
        </nav>


       


      </Box>

      <Box  sx={{ display:{ xs:'block',sm:'none'} , alignItems: 'center', textAlign: 'center'}} >
        <nav id="">
        
         
    
        
           
            <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
            <MenuIcon>menu</MenuIcon>
          </IconButton>
        </Tooltip>

           
       
        </nav>
      </Box>





      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
            <MenuItem  component={Link} to={"/about"} >
          <Avatar > <HomeIcon/> </Avatar>
        </MenuItem>
        <MenuItem  component={Link} to={"category/men"} >
          <Avatar > <MaleIcon/> </Avatar>Men
        </MenuItem>
        <MenuItem  component={Link} to={"category/women"} >
          <Avatar > <FemaleIcon/> </Avatar>Womem
        </MenuItem>      
        <MenuItem  component={Link} to={"category/kid"} >
          <Avatar > <WcIcon/> </Avatar>Kid´s
        </MenuItem>
        <Divider />
        <MenuItem>
        <ListItemIcon>
      
        <CarWidget menu="true" />{" "}
       
        </ListItemIcon>shopping cart
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}