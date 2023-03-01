import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import { PrivateRoute } from "./components/PrivateRoute"
import Home from "./pages/Home"
import Register from "./pages/register"
import Signin from "./pages/signin"

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/Home"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route path="/register" element={<Register />} />
				<Route path="/signin" element={<Signin />} />
			</Routes>
		</div>
	)
}

export default App
