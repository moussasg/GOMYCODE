import React from "react"
import CheckboxDemo from "../CheckBox"
import DeleteTask from "../DeleteTask"
import "./styles.css"

export default function Task({ _id, title, desc, isDone }) {
	return (
		<div className="taskcontainer">
			<p>{title}</p>
			<p>{desc}</p>
			<CheckboxDemo isDone={isDone} id={_id} />
			<DeleteTask id={_id} />
		</div>
	)
}
