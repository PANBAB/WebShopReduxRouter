import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase_setup/firebase.js";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/login-home");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          setErrorMessage("The email you are entering is not registered.");
        } else if (errorCode === "auth/wrong-password") {
          setErrorMessage(
            "The password you entered is incorrect. Please try again."
          );
        } else {
          setErrorMessage(
            "An error occurred. Please try again. Email and password you entered may be incorrect"
          );
        }
        console.error(error);
      });

    console.log(`Email: ${email}, , Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h2>
        <LoginIcon />
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </label>
        <br />
        <Button variant="contained" color="warning" type="submit">
          <b>Login</b>
        </Button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
      </form>
      <h4>Don't have an account? Please click the button below!</h4>
      <Link to="/signin">
        <Button variant="outlined" color="warning" size="large">
          <b>Sign Up</b>
        </Button>
      </Link>
    </div>
  );
}

export default Login;
