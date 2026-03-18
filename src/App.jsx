import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import CreateAccount from "./Component/CreateAccont";
import Login from "./Component/Login";

import Dashboard from "./Component/Dashboard";
import Deposit from "./Component/Deposit";
import Withdraw from "./Component/Withdraw";
import Transaction from "./Component/Transaction";


import AdminLogin from "./Component/AdminLogin";
import AdminDashboard from "./Component/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* USER */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />

        {/* USER DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transactions" element={<Transaction />} />

        {/* ADMIN – later */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
