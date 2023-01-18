import { useRef } from "react"
import "./App.css"
function App() {
	const myref = useRef(null)
	const handleClick = () => {
		console.log(myref.current)
	}
	return (
		<>
		<button onClick={handleClick} ref={myref}>
				hfdskjfh
		</button>		
		</>
	)
}

export default App
