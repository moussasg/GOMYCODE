import React from "react"
export default function AnimalForm({ AddAnimal }) {
	return (
		<form onSubmit={(e) => AddAnimal(e)}>
			<label htmlFor="name"></label>
			<input type="text" name="name" />
			<label htmlFor="description"></label>
			<input type="text" name="description" />
			<label htmlFor="image"></label>
			<input type="file" name="image" />
			<button type="submit">Add Animal</button>
		</form>
	)
}
