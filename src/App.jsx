import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";
import LocationView from "./pages/LocationView";
import ProjectView from "./pages/ProjectView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/location/:location" element={<LocationView />} />
        <Route path="/projects" element={<ProjectView />} />
      </Routes>
    </Router>
  );
}

export default App;
