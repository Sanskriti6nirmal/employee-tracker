import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Ensure this file exists

const locations = ["Pune", "Loni", "Hyderabad", "Bangalore"];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLocationClick = (location) => {
    navigate(`/location/${location}`);
  };

  return (
    <div className="landing-container">
      <h1>Office Locations</h1>
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div
            key={index}
            className="location-card"
            onClick={() => handleLocationClick(location)}
          >
            <h3>{location}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
