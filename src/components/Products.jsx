import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { addToBasket } from "../redux/BasketSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://y9vmo.mocklab.io/json/1");
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function onAddToBasket(product) {
    console.log(product.name);
    dispatch(
      addToBasket({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
    console.log(basket);
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              sx={{ paddingTop: "56.25%" }}
              image={product.image}
              title={product.name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h6" color="secondary">
                {product.price} €
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                component={Link}
                to={product.url}
              >
                Reviews
              </Button>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => onAddToBasket(product)}
              >
                Add to
                <ShoppingCartIcon fontSize="small" />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
