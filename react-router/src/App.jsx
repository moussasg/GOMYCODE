import { useState } from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import { UserContext } from "./Hooks/UserContext"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error404 from "./pages/Error404"
import Home from "./pages/Home"
import Products from "./pages/Products"

function App() {
	const [user, setUser] = useState({
		email: "init",
		password: "init",
	})

	const isAdmin =
		user.email === "admin" && user.password === "admin" ? true : false

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/admin">admin</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/admin"
					element={isAdmin ? <div>authorized</div> : <Navigate to="/" />}
				/>
				{/* "*" va matcher toutes les routes restantes */}
				<Route path="*" element={<Error404 />} />
			</Routes>
			footer
		</UserContext.Provider>
	)
}

export default App
