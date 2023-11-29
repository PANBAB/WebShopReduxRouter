import React, { useEffect } from "react";
import "../components/Hrt.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function AfterRegisterTransfer() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/login-home";
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>Thank you for registering!</h1>
      <div className="container">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>{" "}
      <h2>You will be redirected shortly to the home page.</h2>
      <Button variant="contained" color="warning">
        <Link to="/login-home">Skip waiting</Link>
      </Button>
    </div>
  );
}

export default AfterRegisterTransfer;
