import classes from "./index.module.css"
export default function CarForm({ AddCar }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				margin: "20px",
			}}
		>
			<form className={classes.container} onSubmit={(e) => AddCar(e)}>
				<label htmlFor="id">id</label>
				<input type="text" name="id" />
				<label htmlFor="name">name</label>
				<input type="text" name="name" />
				<label htmlFor="description">description</label>
				<input type="text" name="description" />
				<label htmlFor="category">category</label>
				<input type="text" name="category" />
				<button type="submit">Add Car</button>
			</form>
		</div>
	)
}
