import React from "react"
import { useSelector } from "react-redux"
import Task from "../Task"
import classes from "./styles.module.css"

export default function ListTask() {
	const Tasks = useSelector((state) => state.todos)
	console.log(Tasks)
	return (
		<div className={classes.container}>
			{Tasks.map((el) => (
				<Task key={el.id} {...el} />
			))}
		</div>
	)
}
