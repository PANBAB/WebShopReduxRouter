import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Home.css";

const myLogo = require("./logo.gif");
const Home = () => {
  return (
    <div className="Home">
      <div className="logo">
        <img src={myLogo} alt="Nice Logo :)" />
      </div>
      <div className="content">
        <h1>Welcome to my Exercise Webshop!</h1>
        <p>
          Here you can find exercise equipment with fictional prices,<br></br>{" "}
          but it a nice idea to make something for exercise and sell "exercise
          equipment". Thank you.
        </p>
        <Button variant="outlined" component={Link} to="/products">
          Explore Products
        </Button>
      </div>
      <footer>
        <p>&copy; 2023 Exercises </p>
      </footer>
    </div>
  );
};

export default Home;
