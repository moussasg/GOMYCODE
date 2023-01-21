import React from "react"
import classes from "./index.module.css"

export default function ProductCard({ id, name, color }) {
	return (
		<div className={classes.Container} key={id}>
			<div>name : {name}</div>
			<div>id : {id}</div>
			<div>color: {color}</div>
		</div>
	)
}
