import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Bank.css";
import withdrawBg from "./Userwithdraw.JPG";   // ✅ Import image

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user.transactions) {
    user.transactions = [];
  }

  const handleWithdraw = () => {
    const withdrawAmount = Number(amount);

    if (withdrawAmount <= 0) {
      alert("Invalid Amount");
      return;
    }

    if (user.balance - withdrawAmount < 500) {
      alert("Minimum ₹500 balance must be maintained");
      return;
    }

    const newTransaction = {
      type: "Withdraw",
      amount: withdrawAmount,
      time: new Date().toLocaleString(),
    };

    user.balance -= withdrawAmount;
    user.transactions.push(newTransaction);

    localStorage.setItem("user", JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("newUsers")) || [];

    users = users.map((u) =>
      u.accountNumber === user.accountNumber ? user : u
    );

    localStorage.setItem("newUsers", JSON.stringify(users));

    alert("Amount Withdrawn Successfully");
    setAmount("");
    navigate("/transactions");
  };

  return (
    <>
      <Navbar name={user.name} balance={user.balance} />

      {/* ✅ Background Wrapper */}
      <div
        className="deposit-background"
        style={{ backgroundImage: `url(${withdrawBg})` }}
      >
        <div className="page">
          <h2>Withdraw</h2>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
      </div>
    </>
  );
}