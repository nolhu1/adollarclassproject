import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPortal.css";
import { mockEducators } from "./MockData";

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState("applying");
  const navigate = useNavigate();

  const handleCardClick = (educator, isRegistered) => {
    navigate(`/educator/${educator.id}`, {
      state: { educator, isRegistered },
    });
  };

  return (
    <div className="admin-portal">
      {/* Profile Card */}
      <div className="profile-card">
        <img
          src="/Default_pfp.jpg" // <-- fixed path
          alt="Admin"
          className="profile-pfp"
        />
        <div>
          <h2 className="profile-name">Admin User</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "applying" ? "tab active" : "tab"}
          onClick={() => setActiveTab("applying")}
        >
          Applying Educators
        </button>
        <button
          className={activeTab === "registered" ? "tab active" : "tab"}
          onClick={() => setActiveTab("registered")}
        >
          Registered Educators
        </button>
      </div>

      {/* Educator Cards */}
      <div className="educator-list">
        {mockEducators[activeTab].map((educator) => (
          <div
            key={educator.id}
            className="educator-card"
            onClick={() => handleCardClick(educator, activeTab === "registered")}
          >
            <img src={educator.pfp} alt={educator.name} className="educator-pfp" />
            <p>{educator.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
