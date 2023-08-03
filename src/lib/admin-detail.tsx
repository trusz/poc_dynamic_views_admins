import React from "react"
import { Form, useLoaderData } from "react-router-dom";
import { Employee } from "./employee";

export function AdminDetail(params: any) {
	const { admin } = useLoaderData() as {admin: Employee};

	console.log({level:"dev", message:"AdminDetail", admin})
	return (
		<div>
			<h3>{admin.name}</h3>
		</div>
	)
}