import "./App.css"
import NavBar from "./components/NavBar"
import CardButton from "./components/CardButton"
import SignInCard from "./components/SignInCard"
import ItemCard from "./components/ItemCard" // c la props 
import items from "./constants/items.json" // data (id,name,image) sont la 
function App() {
	console.log(items)
	return (
		<div className="App">
			<NavBar/>
			<CardButton />
			<SignInCard />
			<div className="itemsContainer">  dkhelna bel map dakhel data items.json
				{items.map((el) => ( // ... => id={el.id} / id={el.name} / id={el.image} distructura nom,id,image pas la peine de faire props
				<ItemCard {...el} /> // ... => divise des objets de array de data (items.json) 
				))}
			</div>
		</div>
	)
}
export default App
