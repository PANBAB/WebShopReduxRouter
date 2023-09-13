import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { addToBasket } from "../redux/BasketSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Products() {
  const [products, setProducts] = useState([]);
  const [productsPerRow, setProductsPerRow] = useState(3); // Default to 3 products per row
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const basket = useSelector((state) => state.basket.value);
  const isLoggedIn = useSelector((state) => state.auth.value);
  const [open, setOpen] = React.useState(false);

  const handleSnackbarClick = () => {
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://y9vmo.wiremockapi.cloud/json/1"
        );
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function onAddToBasket({ id, name, price, image }) {
    handleSnackbarClick();
    dispatch(
      addToBasket({
        id,
        name,
        price,
        image,
      })
    );
  }

  const changeProductsPerRow = (num) => {
    setProductsPerRow(num);
  };

  return (
    <div>
      <h4>Change view</h4>
      <div style={{ textAlign: "start", margin: "10px" }}>
        <Button
          variant={productsPerRow === 3 ? "contained" : "outlined"}
          onClick={() => changeProductsPerRow(3)}
        >
          <MoreHorizTwoToneIcon />
        </Button>
        <Button
          variant={productsPerRow === 4 ? "contained" : "outlined"}
          onClick={() => changeProductsPerRow(4)}
        >
          <MoreVertTwoToneIcon />
        </Button>
      </div>

      <Grid container spacing={3}>
        {products.map(({ image, name, price, url, id }) => (
          <Grid item key={id} xs={12} sm={6} md={productsPerRow === 4 ? 3 : 4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ paddingTop: "56.25%" }}
                image={image}
                title={name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" color="primary">
                  {price} €
                </Typography>
              </CardContent>
              {isLoggedIn ? (
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    component={Link}
                    to={url}
                  >
                    Reviews
                  </Button>

                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={() => onAddToBasket({ id, name, price, image })}
                  >
                    Add to
                    <ShoppingCartIcon fontSize="small" />
                    <Snackbar
                      open={open}
                      autoHideDuration={3000}
                      onClose={handleSnackbarClose}
                    >
                      <Alert
                        onClose={handleSnackbarClose}
                        severity="info"
                        sx={{ width: "100%" }}
                      >
                        Item successfully added to basket!
                        <Button
                          onClick={() => Navigate("/basket")}
                          variant="contained"
                          color="error"
                          size="small"
                          sx={{ marginLeft: "10px" }}
                        >
                          {" "}
                          See products in the basket
                        </Button>
                      </Alert>
                    </Snackbar>
                  </Button>
                </CardActions>
              ) : (
                <CardActions>
                  <Button
                    on
                    size="small"
                    color="primary"
                    disableElevation
                    variant="contained"
                    component={Link}
                    to={url}
                  >
                    Reviews
                  </Button>

                  <Button
                    size="small"
                    color="error"
                    disableElevation
                    variant="outlined"
                    onClick={() => handleSnackbarClick()}
                  >
                    Add to
                    <ShoppingCartIcon fontSize="small" />
                    <Snackbar
                      open={open}
                      autoHideDuration={3000}
                      onClose={handleSnackbarClose}
                    >
                      <Alert
                        onClose={handleSnackbarClose}
                        severity="warning"
                        sx={{ width: "100%" }}
                      >
                        You must be logged in to add items to your basket!
                      </Alert>
                    </Snackbar>
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
