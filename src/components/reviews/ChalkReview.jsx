import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const ChalkReview = () => {
  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        There is really no need to review this product,<br></br> this is chalk!
        <br></br>
        Have some fun.
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/products"
      >
        Back to products
      </Button>
    </div>
  );
};

export default ChalkReview;
