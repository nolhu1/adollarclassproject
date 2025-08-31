import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EducatorDetails.css";
import { mockEducators } from "./MockData";

export default function EducatorDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.educator) {
    return (
      <div className="details">
        <p>No educator data provided.</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  const { educator, isRegistered } = state;

  const handleAccept = () => {
    // Remove from applying
    const idx = mockEducators.applying.findIndex((e) => e.id === educator.id);
    if (idx !== -1) {
      const [acceptedEducator] = mockEducators.applying.splice(idx, 1);
      // Add to registered with empty schedule
      mockEducators.registered.push({
        ...acceptedEducator,
        schedule: [],
      });
    }
    navigate("/"); // Go back to main page
  };

  const handleReject = () => {
    // Remove from applying
    const idx = mockEducators.applying.findIndex((e) => e.id === educator.id);
    if (idx !== -1) {
      mockEducators.applying.splice(idx, 1);
    }
    navigate("/"); // Go back to main page
  };

  return (
  <div className="details">
    <button className="back-btn" onClick={() => navigate(-1)}>
      ← Back
    </button>

    <div className="details-header">
      <img src={educator.pfp} alt={educator.name} className="details-pfp" />
      <h2>{educator.name}</h2>
    </div>

    <div className="details-main">
      {/* Left column: Info */}
      <div className="details-info">
        <p><strong>Role:</strong> {educator.role}</p>
        <p><strong>Nickname:</strong> {educator.nickname}</p>
        <p><strong>Age:</strong> {educator.age}</p>
        <p><strong>Birthday:</strong> {educator.birthday}</p>
        <p><strong>Gender:</strong> {educator.gender}</p>
        <p><strong>Email:</strong> {educator.email}</p>
        <p><strong>Phone:</strong> {educator.phone}</p>
        <p><strong>Qualifications:</strong> {educator.qualifications}</p>
        <p>
          <strong>Resume:</strong>{" "}
          <a href={educator.resume} target="_blank" rel="noreferrer">
            View Resume
          </a>
        </p>

        {!isRegistered && (
          <div className="details-actions">
            <button className="accept-btn" onClick={handleAccept}>✅ Accept</button>
            <button className="reject-btn" onClick={handleReject}>❌ Reject</button>
          </div>
        )}
      </div>

      {/* Right column: Schedule */}
      {isRegistered && educator.schedule && (
        <div className="details-schedule">
          <h3>Schedule</h3>
          <ul>
            {educator.schedule.map((slot, idx) => (
              <li key={idx}>{slot}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

}
