import { useState } from "react"
import "swiper/css"
import "./App.css"
import MovieList from "./components/MovieList"
import MoviesToWatch from "./components/MoviesToWatch"
import { movies } from "./movies"
function App() {
	const [Movies, setMovies] = useState(movies)

	const handleToggle = (id) => {
		const newMovies = Movies.map((movie) => {
			if (movie.id === id) {
				return { ...movie, watched: !movie.watched }
			}
			return movie
		})
		setMovies(newMovies)
	}
	return (
		<div className="App">
			<h1>Redux Movie App</h1>
			<MoviesToWatch Movies={Movies} handleToggle={handleToggle} />
			<MovieList Movies={Movies} handleToggle={handleToggle} />
		</div>
	)
}

export default App
