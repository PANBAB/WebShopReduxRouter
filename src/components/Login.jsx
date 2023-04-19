import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import css from "./Login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h2>
        <LoginIcon />
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Username:</b>
          <input type="text" value={username} onChange={handleUsernameChange} />
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
