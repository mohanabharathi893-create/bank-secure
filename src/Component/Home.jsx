import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import bgImage from "./Bank_logo.JPG";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="home-card">
        <h2 className="bank-name">Bank of Secure</h2>

        <h1>Bank Management System</h1>
        <p className="tagline">Secure • Simple • Reliable</p>

        <div className="home-buttons">
          <button onClick={() => navigate("/create-account")}>
            Create User Account
          </button>

          <button onClick={() => navigate("/login")}>
            User Login
          </button>

          <button onClick={() => navigate("/admin")}>
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;