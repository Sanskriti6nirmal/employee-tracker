import { createContext, useState } from 'react'
import employeeData from '../data/employees.json'

export const EmployeeContext = createContext()

export const EmployeeProvider = ({ children }) => {
	const [employees, setEmployees] = useState(employeeData)

	const addEmployee = (newEmployee) => {
		const updatedList = [...employees, newEmployee]
		setEmployees(updatedList)
	}

	return (
		<EmployeeContext.Provider value={{ employees, addEmployee }}>
			{children}
		</EmployeeContext.Provider>
	)
}
