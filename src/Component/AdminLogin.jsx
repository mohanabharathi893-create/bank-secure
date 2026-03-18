import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import adminBg from "./Adminlogin .jpg";

export default function AdminLogin() {
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (admin.username === "admin" && admin.password === "admin123") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <>
      <div className="admin-navbar">
        <div className="bank-name">BANK OF SECURE</div>
        <button onClick={() => navigate("/")}>Home</button>
      </div>

      <div
        className="admin-login-container"
        style={{ backgroundImage: `url(${adminBg})` }}
      >
        <div className="admin-login-card">
          <h2>Admin Login</h2>

          <input
            type="text"
            placeholder="Admin Username"
            onChange={(e) =>
              setAdmin({ ...admin, username: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setAdmin({ ...admin, password: e.target.value })
            }
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
}