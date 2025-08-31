import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Adollarclass 3 new features</h1>
      <div className="home-buttons">
        <button onClick={() => navigate("/admin")}>Admin Portal</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/signup")}>Educator Signup</button>
      </div>
    </div>
  );
}
