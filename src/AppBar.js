import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ResponsiveAppBar = () => {
  return (
    <div className="Navbar">
      <ul>
        <Button variant="outlined">
          <Link to="/">Home</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/products">Products</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/About">About</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/basket">Basket</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/login">Login</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/signin">Sign In</Link>
        </Button>
      </ul>
    </div>
  );
};
export default ResponsiveAppBar;
