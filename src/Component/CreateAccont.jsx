import React, { useState } from "react";
import "./CreateAccount.css";
import { useNavigate, Link } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    aadhaar: "",
    pan: "",
    gender: "",
    dob: "",
    accountType: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const {
      name, aadhaar, pan, gender, dob,
      accountType, email, password
    } = form;

    if (
      !name || !aadhaar || !pan || !gender ||
      !dob || !accountType || !email || !password
    ) {
      alert("All fields required");
      return;
    }

    const accountNumber = Math.floor(
      1000000000 + Math.random() * 9000000000
    );

    const newUser = {
      ...form,
      accountNumber,
      balance: 0,
      transactions: []
    };

    const existingUsers =
      JSON.parse(localStorage.getItem("newUsers")) || [];

    existingUsers.push(newUser);

    localStorage.setItem("newUsers", JSON.stringify(existingUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Account Created Successfully");
    navigate("/login");
  };

  return (
    <>
      <div className="header-bar">
        <div className="logo">Bank Of Secure</div>
        <Link to="/" className="home-link">Home</Link>
      </div>

      <div className="create-bg">
        <div className="create-box">
          <h2>Create Account</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} />
          <input name="pan" placeholder="PAN Number" onChange={handleChange} />

          <select name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input type="date" name="dob" onChange={handleChange} />

          <select name="accountType" onChange={handleChange}>
            <option value="">Account Type</option>
            <option>Savings</option>
            <option>Current</option>
          </select>

          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />

          <button onClick={handleSubmit}>Create Account</button>
        </div>
      </div>
    </>
  );
}