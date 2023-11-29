import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../src/firebase_setup/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../src/redux/AuthSlice.jsx";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Navbar = () => {
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
    <AppBar position="static" style={styles.navbar}>
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" style={styles.link}>
            Products
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/About" style={styles.link}>
            About
          </Link>
        </Typography>

        {auth1 ? (
          <>
            <Typography variant="h6">
              <Link to="/basket" style={styles.link}>
                Basket
              </Link>
            </Typography>

            <IconButton
              variant="contained"
              size="small"
              onClick={handleSignOut}
              style={styles.signOutButton}
            >
              <LogoutRoundedIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h6">
              <Link to="/login" style={styles.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/signin" style={styles.link}>
                Register
              </Link>
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  navbar: {
    background: "linear-gradient(to right, #ffb703, #fb8500)",
    display: "block",
  },
  link: {
    textDecoration: "none",
    color: "white",
    margin: "0 10px",
  },
  signOutButton: {
    backgroundColor: "teal",
    color: "white",
    marginLeft: "10px",
  },
};

export default Navbar;
