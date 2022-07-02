import React, { useEffect, useState } from "react";
import  { useContext } from "react";

import ItemCount from "./ItemCount";
import productos from "../database/products";
import {  Link, useParams } from "react-router-dom";
import { Box, Typography, Grid,Button} from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {SelectedSizes} from "./SelectedSizes";

import { useNavigate } from 'react-router-dom';

import { UserContext } from "../context/context";



const ItemDetail = () => {

  
  const navigate = useNavigate();

 

  const id = useParams().id;
  const product = productos[id]; 

  const [temporal, setTemporal]= useState( {
    
      description: product.description,
      images: [0],   
      price: product.price,
      size: undefined,
      name:product.name,  
      title: product.title,
      cantidad:undefined        
   } );
   const {setCarrito} = useContext(UserContext);
  
 const SelecSize=(size)=>{
  console.log(size)
  setTemporal(curretProduct =>({
    ...curretProduct,
    size
  }));
 }

 const updatecount=(cantidad)=>{ 
  console.log(cantidad)
  setTemporal(curretProduct =>({
    ...curretProduct,
    cantidad,  
  }
  ));
 
 }

 
 
const agregarCarrito = (count) => {
  console.log("agregar al carrito");
  if(!temporal.size){
    
    return ;}else{


   console.log((temporal));    
  
  setCarrito(temporal)
   navigate('/shoppingcart')  

    }
   

    
}

  return (

    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={6}>
        <Slide easing="ease" duration={900} indicators={true}>
          {product.images.map((img) => {
            const url = `/images/${img}`;
            return (
              <div className={"eachslide"} key={img}>
                <div
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${url})`,
                    width: "100%",
                  }}
                ></div>
              </div>
            );
          })}
        </Slide>      
      </Grid>

      <Grid item xs={12} sm={6} md={8} lg={6}>
        <Box display="flex" flexDirection="column">
          <Typography>$:{product.price}</Typography>
          <Typography>{product.title}</Typography>

          <SelectedSizes  SelectedSize={temporal.size}  SelecSize={SelecSize}  sizes={product.sizes}  ></SelectedSizes>          
        
          <ItemCount currenValue={temporal.cantidad}  stock={product.inStock} initial={1} selecCant={updatecount}  />
          <br />  
          <Typography>Cantidad : {temporal.cantidad}</Typography>      
          <br />       
        
          <Button variant="contained" size="small" color="secondary" onClick={()=> agregarCarrito() }  >
           {
            temporal.size ? 'Agregar al carrito de compras' :  'selecionar talla ' 
             
           }
          
           
          </Button>
             </Box>
          
          <Box sx={{ my: 3 }}>        
        </Box>


        <Box sx={{ my: 3 }}>
          <Typography>{product.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
