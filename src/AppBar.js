import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../src/firebase_setup/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../src/redux/AuthSlice.jsx";

const ResponsiveAppBar = () => {
  const auth1 = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

  const hideAppBarPages = ["/signin", "/checkout", "/after-checkout-transfer"];
  const shouldHideAppBar = hideAppBarPages.includes(location.pathname);

  if (shouldHideAppBar) {
    return null;
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

        {auth1 ? (
          <>
            <Button variant="outlined">
              <Link to="/basket">Basket</Link>
            </Button>

            <Button variant="contained" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
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
