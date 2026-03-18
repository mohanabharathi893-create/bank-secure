import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ name, balance }) {
  return (
    <div className="navbar">

      {/* Left Section */}
      <div className="nav-left">
        Welcome, <span>{name}</span>
      </div>

      {/* Center Section */}
      <div className="nav-center">
        Balance: ₹{balance}
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/deposit">Deposit</Link>
        <Link to="/withdraw">Withdraw</Link>
        <Link to="/transactions">History</Link>
        <Link to="/login">Logout</Link>
      </div>

    </div>
  );
}
