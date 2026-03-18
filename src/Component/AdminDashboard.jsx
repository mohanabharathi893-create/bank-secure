import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import adminDashBg from "./AdminDashboard.jpg";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("newUsers")) || [];
  const [selectedUser, setSelectedUser] = useState(null);

  const calculateTotals = (transactions) => {
    let totalDeposit = 0;
    let totalWithdraw = 0;

    transactions.forEach((t) => {
      if (t.type === "Deposit") totalDeposit += t.amount;
      if (t.type === "Withdraw") totalWithdraw += t.amount;
    });

    return { totalDeposit, totalWithdraw };
  };

  return (
    <>
      <div className="admin-navbar">
        <div className="bank-name">BANK OF SECURE - ADMIN</div>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>

      <div
        className="admin-dashboard-background"
        style={{ backgroundImage: `url(${adminDashBg})` }}
      >
        <div className="admin-container">

          {/* LEFT SIDE USER LIST */}
          <div className="user-list">
            <h2>All Users</h2>

            {users.length === 0 && <p>No Users Found</p>}

            {users.map((u, index) => (
              <div
                key={index}
                className="user-card"
                onClick={() => setSelectedUser(u)}
              >
                <p><strong>{u.name}</strong></p>
                <p>Acc No: {u.accountNumber}</p>
                <p>Balance: ₹{u.balance}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE USER DETAILS */}
          {selectedUser && (
            <div className="details-card">
              <h2>User Full Details</h2>

              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Aadhaar:</strong> {selectedUser.aadhaar}</p>
              <p><strong>PAN:</strong> {selectedUser.pan}</p>
              <p><strong>Gender:</strong> {selectedUser.gender}</p>
              <p><strong>DOB:</strong> {selectedUser.dob}</p>
              <p><strong>Account Type:</strong> {selectedUser.accountType}</p>
              <p><strong>Current Balance:</strong> ₹{selectedUser.balance}</p>

              <h3>Transaction History</h3>

              {selectedUser.transactions.length === 0 ? (
                <p>No Transactions</p>
              ) : (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedUser.transactions.map((t, i) => (
                        <tr key={i}>
                          <td>{t.type}</td>
                          <td>₹{t.amount}</td>
                          <td>{t.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {(() => {
                    const { totalDeposit, totalWithdraw } =
                      calculateTotals(selectedUser.transactions);

                    return (
                      <div className="totals">
                        <p>Total Deposited: ₹{totalDeposit}</p>
                        <p>Total Withdrawn: ₹{totalWithdraw}</p>
                      </div>
                    );
                  })()}
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}