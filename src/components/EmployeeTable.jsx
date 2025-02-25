import React from "react";

const EmployeeTable = ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Role</th>
          <th>Location</th>
          <th>Status</th>
          <th>Project</th>
          <th>Customer</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.role}</td>
            <td>{emp.location}</td>
            <td>{emp.status === "Office" ? "🏢 Office" : "🏠 Home"}</td>
            <td>{emp.project}</td>
            <td>{emp.customer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
