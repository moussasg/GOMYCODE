import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Hooks/UserContext"

export default function Form() {
	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault()

		const formdata = new FormData(e.target)
		const data = Object.fromEntries(formdata)

		setUser(data)
		navigate("/admin")
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input type="text" name="email" />
			<input type="text" name="password" />
			<button type="submit">signin</button>
		</form>
	)
}
