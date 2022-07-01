import { useContext } from "react";

import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { UserContext } from "../context/context";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { CarList } from "./CarList";

const CarWidget = (props) => {
  const algo = useContext(UserContext);
  console.log(algo);

  if (props.menu) {
    return (
      <div id="logocart">
        <NavLink to="/shoppingcart">
          <Badge badgeContent={2} color="primary">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="item-list-container">
        <div className="center">
          <div className="item-list-container__contenedor">
            <div className="item-list-container__contenido">
              <h1 className="item-list-container__titulo"> shopping cart</h1>
              <Grid container>
                <Grid item xs={12} sm={7}>
                  <Typography>mm</Typography>
                  <CarList />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Card className="summary-card">
                    <CardContent>
                      <Typography variant="h6">Orden</Typography>
                      <Divider sx={{ my: 3 }}></Divider>

                      <Box sx={{ mt: 3 }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          className="circular-btn"
                          fullWidth
                        >
                          Checkout
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default CarWidget;
