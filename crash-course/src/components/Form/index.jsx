import React from "react"
export default function Form({ children }) {
	const handleChange = (event) => {
		console.log(event.target.value)
	}
	return (
		<div>
			<input type="text" onChange={(e) => handleChange(e)} />
			<input type="text" onChange={(e) => handleChange(e)} />
		</div>
	)
}
