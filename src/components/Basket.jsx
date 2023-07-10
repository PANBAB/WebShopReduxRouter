import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { removeFromBasket } from "../redux/BasketSlice.jsx";

function Basket() {
  const basket = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();

  const totalPrice = basket
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  const handleRemoveFromBasket = (itemId) => {
    dispatch(removeFromBasket(itemId));
  };

  if (basket.length === 0) {
    return (
      <Typography variant="h5" component="div">
        <div className="BasketHeader">
          <h1>Your basket is currently empty.</h1>
          <h2>Fill it up a bit!</h2>
        </div>
      </Typography>
    );
  }

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
              fullWidth
              variant="contained"
              component={Link}
              to="/checkout"
              color="primary"
            >
              <b>Go to Checkout</b>
            </Button>
            <Button
              fullWidth
              variant="contained"
              component={Link}
              to="/products"
              color="secondary"
            >
              <b>Back to products</b>
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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveFromBasket(item.id)}
              >
                Remove from Basket
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Basket;
