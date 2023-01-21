import React, { useState } from "react"
import P206 from "../assets/206.jpg"
import CarCard from "../components/CarCard"
import CarForm from "../components/CarForm"
import FilterBtn from "../components/FilterBtn"
import mycars from "../constants/cars"

export default function Home() {
	const [cars, setCars] = useState(mycars) //init state avec nos voitures
	const AddCar = (e) => {
		e.preventDefault() // pour que la page ne refresh pas

		const formdata = new FormData(e.target)
		const newCar = Object.fromEntries(formdata)

		newCar.image = P206 // jai ajouter une image static
		setCars([...cars, newCar]) // add new car to useState
	}
	const handleFilter = (e) => {
		const filtervalue = e.target.value // get value from select

		if (filtervalue === "all") {
			setCars(mycars) // si c all on remet tout voitures a l'etat initial
		} else {
			// filter les voiture qui ont la meme categorie que la valeur selection "filter"
			const filteredCars = mycars.filter((car) => car.categorie === filtervalue)
			setCars(filteredCars) // on set les voitures filtrer
		}
	}

	return (
		<div>
			<h1>Car App</h1>
			<CarForm AddCar={AddCar} />
			<FilterBtn handleFilter={handleFilter} />
			<div className="wrapper">
				{cars.map((car) => (
					<CarCard key={car.id} {...car} />
				))}
			</div>
		</div>
	)
}
