import React from "react"
import "./index.css"

function Button({ OurPropsAsFunction }) {
	return (
		<div className="mybtn" onClick={(e) => OurPropsAsFunction(e)}>
			Button
		</div>
	)
}

export default Button
