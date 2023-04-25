import React from "react";
import { useSelector } from "react-redux";

import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

function Basket() {
  const basket = useSelector((state) => state.basket.value);
  console.log(basket);

  return (
    <div>
      <Typography variant="h5" component="div">
        <h1>Your basket currently contains:</h1>
      </Typography>
      {basket.map((item) => (
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
              Price: {item.price} €
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Basket;
