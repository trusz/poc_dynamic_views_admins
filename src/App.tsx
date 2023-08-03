import React from "react"
import './App.css'
import { AdminCard } from "./lib/admin-card"
import { Employee } from "./lib/employee"
import { Link } from "react-router-dom";

/**
* @typedef {Object} Employee
* @property {string} name
* @property {boolean=} isAdmin
*/

function App() {
    
    const employees: Employee[] = React.useMemo(() => {
        const empJSON = window.localStorage.getItem('employees')
        if(!empJSON){ return [] }
        
        return JSON.parse(empJSON)
    }, [])
    
    const admins = employees.filter(emp => emp.isAdmin)
    
    return (
        <div className="admin-container">
            <h3>Admins</h3>
            <ul>
                {admins.map((emp, i) => (
                    <li key={i}>
                        <Link to={emp.id}>
                            <AdminCard employee={emp} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
        
export default App
        