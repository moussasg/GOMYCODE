import React from "react"

export default function FilterBtn({ handleFilter }) {
	return (
		<select onChange={(e) => handleFilter(e)}>
			<option value="all">All</option>
			<option value="tuning">tuning</option>
			<option value="sport">SPORT</option>
		</select>
	)
}
