import React, { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../src/firebase_setup/firebase.js";
import { auth } from "../../src/firebase_setup/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import LoginIcon from "@mui/icons-material/Login";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const db = getFirestore(firebaseApp);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const redirectToAfterRegister = () => {
    window.location.href = "/after-register-transfer";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);
        redirectToAfterRegister();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(
      `Email: ${email}, Password: ${password}, Repeat Password: ${repeatPassword}`
    );
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password !== repeatPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign Up</h1>

      <h2>
        {" "}
        Already have an account?{" "}
        <Button
          variant="contained"
          color="warning"
          size="small"
          component={Link}
          to="/login"
          disableElevation
        >
          <b>Log In</b>
        </Button>
      </h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            placeholder="Enter email"
          />
        </label>
        <span className="error">{emailError}</span>
        <br />
        <label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={validatePassword}
            placeholder="Password(min 6 characters)"
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            onBlur={validatePassword}
            placeholder="Repeat password"
          />
        </label>
        <span className="error">{passwordError}</span>
        <br />
        <Button color="warning" size="large" type="submit">
          <b>Sign Up</b>
        </Button>
        <Button variant="contained" color="warning" component={Link} to="/">
          <KeyboardReturnOutlinedIcon />
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
