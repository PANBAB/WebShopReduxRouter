import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../src/firebase_setup/firebase.js";
import AuthDetails from "../src/components/AuthDetails.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../src/redux/AuthSlice.jsx";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const auth1 = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        console.log("You signed out!");
        dispatch(logout());
        console.log(auth1);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
        {auth1 ? (
          <Button variant="outlined" onClick={handleSignOut}>
            Sign Out
          </Button>
        ) : (
          <>
            <Button variant="outlined">
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="outlined">
              <Link to="/signin">Register</Link>
            </Button>
          </>
        )}
      </ul>
    </div>
  );
};

export default ResponsiveAppBar;
