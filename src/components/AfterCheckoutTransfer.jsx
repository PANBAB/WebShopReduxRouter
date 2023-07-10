import React from "react";
import "../components/Hrt.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function AfterCheckoutTransfer() {
  return (
    <div>
      <h1>Thank you for your order!</h1>
      <div class="container">
        <div class="lds-heart">
          <div></div>
        </div>
      </div>{" "}
      <h2>Redirecting you to the payment page</h2>
      <Button variant="contained" color="warning">
        <Link to="/">Click here to go back</Link>
      </Button>
    </div>
  );
}
export default AfterCheckoutTransfer;
