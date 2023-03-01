import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSignupMutation } from "../app/ApiSlice"
import { setUser } from "../app/userSlice"

export default function Register() {
	const [signupmutation] = useSignupMutation()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const formdata = new FormData(e.target)
		const data = Object.fromEntries(formdata)

		const res = await signupmutation(data)

		if (res.error) return console.log("error", res.error)
		localStorage.setItem("token", res.data.token)
		dispatch(setUser(res.data.user))
		navigate("/Home")
	}

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="email"></label>
				<input className="input" type="text" name="email" />
				<label htmlFor="password"></label>
				<input className="input" type="text" name="password" />
				<button type="submit">connect</button>
			</form>
		</div>
	)
}
