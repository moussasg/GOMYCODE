	import React from "react"

export default function User({ AttributeUser }) {
	return (
		<div key={AttributeUser.id}>
			<div>name : {AttributeUser.name}</div>
			<div>id : {AttributeUser.id}</div>
			<div>color: {AttributeUser.color}</div>
		</div>
	)
}
