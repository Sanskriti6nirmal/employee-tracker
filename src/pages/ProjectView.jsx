import React, { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import SearchFilter from "../components/SearchFilter";
import employeesData from "../data/employees.json";

const ProjectView = () => {
  const [filteredEmployees, setFilteredEmployees] = useState(employeesData);

  return (
    <div className="container">
      <h2>Employees by Project/Customer</h2>
      <SearchFilter
        employees={employeesData}
        setFilteredEmployees={setFilteredEmployees}
      />
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
};

export default ProjectView;
