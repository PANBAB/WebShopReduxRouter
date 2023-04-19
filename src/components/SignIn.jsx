import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Email: ${email}, Username: ${username}, Password: ${password}, Repeat Password: ${repeatPassword}`
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
      <h2>Sign In</h2>
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
          <b> Username:</b>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
