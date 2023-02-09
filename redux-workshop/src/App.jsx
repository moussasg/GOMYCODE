import { useSelector } from "react-redux"
import "swiper/css"
import "./App.css"
import MovieList from "./components/MovieList"
import MoviesToWatch from "./components/MoviesToWatch"
function App() {
	const Movies = useSelector((state) => state.movies)
	console.log(Movies)

	return (
		<div className="App">
			<h1>Redux Movie App</h1>
			<MoviesToWatch />
			<MovieList />
		</div>
	)
}

export default App
