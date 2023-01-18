	import React from "react"

export default function User({ AttributeUser }) {
	return (
		<div>
			<div>name : {AttributeUser.name}</div>
			<div>id : {AttributeUser.id}</div>
			<div>color: {AttributeUser.age}</div>
		</div>
	)
}
