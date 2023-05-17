import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import { WidthFull } from "@mui/icons-material";

function Basket() {
  const basket = useSelector((state) => state.basket.value);
  console.log(basket);

  return (
    <div>
      <Typography variant="h5" component="div">
        <div className="BasketHeader">
          <h1>Your basket currently contains:</h1>
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
                  Price: {item.price} €
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
