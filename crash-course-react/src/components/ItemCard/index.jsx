import React from "react" // c la props
import classes from "./style.module.css"
export default function ItemCard({ name, image }) {
	return (
		<div className={classes.cardContainer}>
			<img src={image} alt=""/> 
			<h2>{name}</h2>
			<button>add to card</button>
		</div>
	)
}
