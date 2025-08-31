import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPortal from "./AdminPortal/AdminPortal";
import EducatorDetails from "./AdminPortal/EducatorDetails";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/signup";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPortal />} />
      <Route path="/educator/:id" element={<EducatorDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
