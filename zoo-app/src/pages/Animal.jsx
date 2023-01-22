import React from "react"
import { useParams } from "react-router-dom"

export default function Animal({ myanimals }) {
	// useParams() is a hook that allows you to access the URL parameters
	const { id } = useParams()
	//on filtre l'array myanimals pour ne garder que l'animal dont l'id correspond à l'id de l'url
	const searchanimal = myanimals?.filter((animal) => animal._id === id)

	// on a ajouter [0] car notre donner est un tableau array -> [{}]
	return (
		<div>
			{searchanimal[0]?.name}
			<img src={searchanimal[0]?.image} alt={searchanimal[0]?.name} />
		</div>
	)
}
