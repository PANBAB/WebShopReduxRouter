import React, { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../src/firebase_setup/firebase.js";
import { auth } from "../../src/firebase_setup/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);
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
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <b>Email:</b>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
          />
        </label>
        <span className="error">{emailError}</span>
        <br />
        <label>
          <b>Password:</b>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={validatePassword}
          />
        </label>
        <br />
        <label>
          <b>
            Repeat<br></br> Password:
          </b>
          <input
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            onBlur={validatePassword}
          />
        </label>
        <span className="error">{passwordError}</span>
        <br />
        <button type="submit">
          <b>Register</b>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
