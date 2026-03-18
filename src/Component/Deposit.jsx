import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Bank.css";
import depositBg from "./Userdeposit.JPG";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user.transactions) {
    user.transactions = [];
  }

  const handleDeposit = () => {
    const depositAmount = Number(amount);

    if (depositAmount <= 0) {
      alert("Invalid Amount");
      return;
    }

    const newTransaction = {
      type: "Deposit",
      amount: depositAmount,
      time: new Date().toLocaleString(),
    };

    user.balance += depositAmount;
    user.transactions.push(newTransaction);

    localStorage.setItem("user", JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("newUsers")) || [];

    users = users.map((u) =>
      u.accountNumber === user.accountNumber ? user : u
    );

    localStorage.setItem("newUsers", JSON.stringify(users));

    alert("Amount Deposited Successfully");
    setAmount("");
    navigate("/transactions");
  };

  return (
    <>
      <Navbar name={user.name} balance={user.balance} />

      <div
        className="deposit-background"
        style={{ backgroundImage: `url(${depositBg})` }}
      >
        <div className="page">
          <h2>Deposit</h2>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleDeposit}>Deposit</button>
        </div>
      </div>
    </>
  );
}