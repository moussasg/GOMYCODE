import classes from "./style.module.css"
export default function CardButton() {
	return (
		<div className={classes.cardWrapper}>
			Hello this is {} <br />
			and we are doing a {} project <br />
			<button type="submit">Count</button>
			<input type="text" />
		</div>
	)
}