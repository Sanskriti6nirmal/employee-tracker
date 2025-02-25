import React, { useState } from "react";

const SearchFilter = ({ employees, setFilteredEmployees }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredEmployees(
      employees.filter(
        (emp) =>
          emp.name.toLowerCase().includes(value) ||
          emp.project.toLowerCase().includes(value) ||
          emp.customer.toLowerCase().includes(value)
      )
    );
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder="Search by Name, Project, or Customer"
    />
  );
};

export default SearchFilter;
