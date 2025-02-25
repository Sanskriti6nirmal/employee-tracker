import React, { useState } from "react";

const SearchFilter = ({ employees, setFilteredEmployees }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(term) ||
        emp.position.toLowerCase().includes(term)
    );
    setFilteredEmployees(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search employees..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchFilter;
