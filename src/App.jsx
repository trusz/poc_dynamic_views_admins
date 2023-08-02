import React from "react"
import './App.css'

/**
 * @typedef {Object} Employee
  * @property {string} name
  * @property {boolean=} isAdmin
*/

function App() {

  /** @type {Employee[]} */
  const employees = React.useMemo(() => {
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
             <h4>{emp.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
