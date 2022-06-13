import React from 'react';
import {IconButton,Box,Typography} from "@mui/material";




export const SelectedSizes= (props) => {
  return (

    <Box>

      {
        props.sizes.map(size =>
         
          <IconButton key={size} 
          size= "small"   
          color="primary"  
              
           >          
            

                {size}          
            </IconButton>  
    
        )}
</Box>
 
  )
}
