import { useDispatch } from "react-redux"
import { ToggleWatched } from "../../app/Slices/movieSlice"
import classes from "./style.module.css"

const MovieCard = ({ image, title, rating, type, id }) => {
	const dispatch = useDispatch()

	return (
		<div className={classes.container}>
			<img src={image} alt={title} />
			<button onClick={() => dispatch(ToggleWatched(id))}>
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
