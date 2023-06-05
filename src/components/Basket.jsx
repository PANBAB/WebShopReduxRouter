import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function Basket() {
  const basket = useSelector((state) => state.basket.value);
  console.log(basket);

  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Typography variant="h5" component="div">
        <div className="BasketHeader">
          <h1>Your basket currently contains:</h1>
        </div>
        <div className="BasketTotal">
          <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                Total price of your basket :
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>{totalPrice} €</b>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              component={Link}
              to="/checkout"
              color="primary"
            >
              <b>Go to Checkout</b>
            </Button>
          </Card>
        </div>
      </Typography>
      <Grid container spacing={3}>
        {basket.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b> Price: {item.price} €</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Basket;
