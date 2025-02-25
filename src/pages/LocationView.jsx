import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";
import SearchFilter from "../components/SearchFilter";
import employeesData from "../data/employees.json";
import "./LocationView.css"; // Ensure this file exists

const LocationView = () => {
  const { location } = useParams();
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    setFilteredEmployees(
      employeesData.filter((emp) => emp.location === location)
    );
  }, [location]);

  return (
    <div className="container">
      <h2>Employees in {location}</h2>
      <SearchFilter
        employees={employeesData}
        setFilteredEmployees={setFilteredEmployees}
      />
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
};

export default LocationView;
