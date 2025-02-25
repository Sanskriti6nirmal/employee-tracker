import React from "react";
import { useNavigate } from "react-router-dom";

const locations = ["Pune", "Loni", "Hyderabad", "Bangalore"];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Employee Tracking System</h1>
      <h2>Select an Office Location</h2>
      <div className="location-container">
        {locations.map((loc) => (
          <button
            key={loc}
            className="location-btn"
            onClick={() => navigate(`/location/${loc}`)}
          >
            {loc}
          </button>
        ))}
      </div>
      <button className="switch-btn" onClick={() => navigate("/projects")}>
        View by Project/Customer
      </button>
    </div>
  );
};

export default LandingPage;
