import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import dashboardBg from "./Userdashboard.JPG";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <div className="header-bar">
        <div className="logo">Bank Of Secure</div>

        <nav className="nav-links">
          <span className="nav-disabled">Dashboard</span>
          <Link to="/deposit" className="nav-link">Deposit</Link>
          <Link to="/withdraw" className="nav-link">Withdraw</Link>
          <Link to="/transactions" className="nav-link">History</Link>
          <button onClick={handleLogout} className="nav-link logout-btn">
            Logout
          </button>
        </nav>
      </div>

      {/* ===== BACKGROUND SECTION ===== */}
      <div
        className="dashboard-container"
        style={{
          backgroundImage: `url(${dashboardBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="overlay"></div>

        <h2>Welcome, {user.name}!</h2>

        <div className="user-info">
          <p><strong>Account Number:</strong> {user.accountNumber}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Account Type:</strong> {user.accountType}</p>
          <p><strong>Balance:</strong> ₹{user.balance}</p>
          <p><strong>Aadhaar:</strong> {user.aadhaar}</p>
          <p><strong>PAN:</strong> {user.pan}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
        </div>
      </div>
    </>
  );
}