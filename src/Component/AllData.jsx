import React, { useEffect, useState } from "react";
import "./AllData.css";
import { NavLink } from "react-router-dom";

function AllData() {
  const [user, setUser] = useState(null);
  const [recentTx, setRecentTx] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length > 0) {
      setUser(storedUsers[0]);
    }

    // recent transactions only in memory (reset on refresh)
    setRecentTx([]);
  }, []);

  return (
    <>
      <nav className="navbar">
        <h2>Bank of Stash</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/User">User Creation</NavLink></li>
          <li><NavLink to="/Deposit">Deposit</NavLink></li>
          <li><NavLink to="/Withdraw">Withdraw</NavLink></li>
          <li><NavLink to="/Alldata" className="active">All Data</NavLink></li>
        </ul>
      </nav>

      <div className="all-data-page">
        <div className="all-data-box">
          <h2>Permanent Account</h2>

          {user ? (
            <>
              <p><b>Name:</b> {user.name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Password:</b> {user.password}</p>
              <p><b>Account Type:</b> {user.accountType}</p>
              <p><b>Balance:</b> ₹ {user.balance}</p>

              <h3>Recent Transactions</h3>
              <p>No recent transactions available after refresh.</p>
            </>
          ) : (
            <p className="error-text">No account data found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AllData;
