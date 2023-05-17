import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AuthDetails from "../AuthDetails";

const myAfterLogo = require("./AfterHome.gif");

const LoginHome = () => {
  return (
    <div className="Home">
      <AuthDetails />
      <div className="content">
        <div className="logo">
          <img src={myAfterLogo} alt="Nice Logo :)" />
        </div>

        <p>
          Here you can find exercise equipment with fictional prices,<br></br>{" "}
          but it a nice idea to make something for exercise and sell "exercise
          equipment". Thank you.
        </p>
        <Button
          variant="contained"
          component={Link}
          to="/products"
          color="info"
        >
          Explore Products
        </Button>
      </div>
      <footer>
        <p>&copy; 2023 Exercises </p>
      </footer>
    </div>
  );
};

export default LoginHome;
