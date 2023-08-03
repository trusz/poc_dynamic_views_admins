import { Form, useLoaderData } from "react-router-dom";
import { Employee } from "./employee";

export async function adminDetailLoader({ params }) {
    const { adminId } = params;
    
    const empJSON = window.localStorage.getItem('employees')
    if(!empJSON){ return undefined }
    
    const employees = JSON.parse(empJSON) as Employee[]
    const admins = employees.filter(emp => emp.isAdmin)
    const admin = admins.find(emp => emp.id === adminId)
    console.log({level:"dev", message:"adminDetailLoader", adminId, admin})
    
    return { admin };
    
}
