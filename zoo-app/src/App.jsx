import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Animal from "./pages/Animal"
import Home from "./pages/Home"
function App() {
	const [myanimals, setmyanimals] = useState([])
	useEffect(() => {
		//on creer une fonction async pour ramener nos data
		//dans useEffect: car on a besoin d'attendre que
		// les components soit dans le document(mounted)
		// pour ensuite ramener notre data
		const getAnimals = async () => {
			const res = await axios.get("https://zoo-api-nhvk.onrender.com/animals")
			setmyanimals(res.data) //on met nos données dans notre useState
		}
		getAnimals()
	}, [])

	return (
		// on a étulisé les Router ////////////////////////////////////////////////////
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Home myanimals={myanimals} setmyanimals={setmyanimals} />}
				/>
				{/* on a ajouter :id dans le path pour pouvoir recuperer l'id de l'animal */}
				<Route path="/animals/:id" element={<Animal myanimals={myanimals} />} />
			</Routes>
		</div>
	)
}

export default App
