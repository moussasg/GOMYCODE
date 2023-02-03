import classes from "./style.module.css"

const MovieCard = ({ image, title, rating, type, id, handleToggle }) => {
	return (
		<div className={classes.container}>
			<img src={image} alt={title} />
			<button onClick={() => handleToggle(id)}>
				{type === "mylist" ? "-" : "+"}
			</button>

			<div className={classes.lower}>
				<div>{title}</div>
				<div>{rating}</div>
			</div>
		</div>
	)
}

export default MovieCard
