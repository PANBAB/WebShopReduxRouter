import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase_setup/firebase.js";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

        console.log(user);
        navigate("/login-home");
      })
      .catch((error) => {
        console.log(error);
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
          <b>Email:</b>
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          <b>Password:</b>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <h4>Don't have an account? Please click the button below!</h4>
      <Link to="/signin">
        {" "}
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default Login;
