import React from "react"
function Button({ OurPropsAsFunction }) {
	return <div onClick={(e) => OurPropsAsFunction(e)}>Button</div>
}

export default Button
