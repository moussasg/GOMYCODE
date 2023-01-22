import { useRef } from "react"
import "./App.css"
import Button from "./components/Button"
import ProductCard from "./components/ProductCard"
import User from "./components/User"
import products from "./products.json"

function App() {
	const myref = useRef(null) // null ici est la val initiale

	const handleClick = () => {
		console.log(myref.current) // .current pour acceder a l'element
	}
	const handleBtnClick = (e) => {
		console.log("Button Component clicked")
	}
	const user = {
		name: "John",
		id: 1,
		age: "50",
	}

	return (
		<>
			{/* ref={myref} c pour creer la reference sur un element */}
			<button onClick={handleClick} ref={myref}>
				Ref Button
			</button>
			<Button OurPropsAsFunction={handleBtnClick} />
			<User AttributeUser={user} />
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</>
	)
}

export default App
