import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../app/userSlice"

export default function NavBar() {
	//get user from store
	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()

	return (
		<div>
			{user ? (
				<>
					<Link to="/Home">Home</Link>
					<Link to="/signin" onClick={() => dispatch(logout())}>
						logout
					</Link>
				</>
			) : (
				<>
					<Link to="/register">register</Link>
					<Link to="/signin">signin</Link>
				</>
			)}
		</div>
	)
}
