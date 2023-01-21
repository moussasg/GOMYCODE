import React from "react"
import { useParams } from "react-router-dom"

export default function Animal({ myanimals }) {
	const { id } = useParams()
	const searchanimal = myanimals?.filter((animal) => animal._id === id)

	return (
		<div>
			{searchanimal[0]?.name}
			<img src={searchanimal[0]?.image} alt={searchanimal[0]?.name} />
		</div>
	)
}
