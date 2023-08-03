import React from "react"
import "./admin-card.css"
import { Employee } from "./employee"

type Props = {
    employee: Employee
}

export function AdminCard(props:Props) {
    
    const {employee} = props
    
    return (
        <div className="admin-card">
           <h3>{employee.name}</h3>
        </div>
    )
}