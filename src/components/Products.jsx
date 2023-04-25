import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

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
  const Navigate = useNavigate();
  const basket = useSelector((state) => state.basket.value);
  const isLoggedIn = useSelector((state) => state.auth.value);

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
    Navigate("/basket");
    dispatch(
      addToBasket({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
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
            {isLoggedIn ? (
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
            ) : (
              <CardActions>
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="error">
                    <AlertTitle>Info</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                  </Alert>{" "}
                </Stack>
                <Button
                  on
                  size="small"
                  color="error"
                  disableElevation
                  variant="contained"
                  component={Link}
                  to={product.url}
                >
                  Reviews
                </Button>

                <Button
                  size="small"
                  color="error"
                  disableElevation
                  variant="contained"
                  component={Link}
                  to={"/login"}
                >
                  Add to
                  <ShoppingCartIcon fontSize="small" />
                </Button>
              </CardActions>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
