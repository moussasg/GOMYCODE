import React from "react"
import classes from "./index.module.css"

function AnimalCard({ name, image, description, _id }) {
	return (
		<div className={classes.container}>
			<a href={`/animals/${_id}`}>
				<p>{name}</p>
			</a>
			<img src={image} alt="" />
			<p>{description}</p>
		</div>
	)
}

export default AnimalCard
