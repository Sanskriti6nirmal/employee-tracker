import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LocationView from "./pages/LocationView";
import ProjectCustomerView from "./pages/ProjectCustomerView";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/location/:location" element={<LocationView />} />
          <Route path="/projects" element={<ProjectCustomerView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
