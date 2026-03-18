import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("newUsers")) || [];

    const foundUser = users.find(
      (u) =>
        (username === u.email ||
          username === u.accountNumber.toString()) &&
        password === u.password
    );

    if (!foundUser) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("user", JSON.stringify(foundUser));
    navigate("/dashboard");
  };

  return (
    <>
      <div className="header-bar">
        <div className="logo">Bank Of Secure</div>
        <Link to="/" className="home-link">Home</Link>
      </div>

      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Account Number / Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;