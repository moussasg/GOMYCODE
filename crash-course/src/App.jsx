import { useRef } from "react"
import "./App.css"
import Button from "./components/Button/index"
import Container  from "./components/Container/index"
import User from "./components/User/index"
import  Form from "./components/Form/index"
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
		<Button></Button>
		<Container></Container>
		<Form></Form>
		<User></User>			
		
		</>
	)
}

export default App
