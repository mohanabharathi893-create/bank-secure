import React from "react";
import Navbar from "./Navbar";
import "./Bank.css";
import transactionBg from "./Userhistory.JPG";

function Transactions() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const transactions = user.transactions || [];

  return (
    <>
      <Navbar name={user.name} balance={user.balance} />

      {/* Background Section */}
      <div
        className="deposit-background"
        style={{ backgroundImage: `url(${transactionBg})` }}
      >
        <div className="page">
          <h2>Transaction History</h2>

          {transactions.length === 0 ? (
            <p>No transactions yet</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date & Time</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((t, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        color: t.type === "Deposit" ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {t.type}
                    </td>

                    <td>₹{t.amount}</td>
                    <td>{t.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Transactions;