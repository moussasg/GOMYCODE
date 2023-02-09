import React from "react"
import CheckboxDemo from "../CheckBox"
import DeleteTask from "../DeleteTask"
import "./styles.css"

export default function Task({ id, title, desc, isDone }) {
	return (
		<div className="taskcontainer">
			<p>{title}</p>
			<p>{desc}</p>
			<CheckboxDemo isDone={isDone} id={id} />
			<DeleteTask id={id} />
		</div>
	)
}
