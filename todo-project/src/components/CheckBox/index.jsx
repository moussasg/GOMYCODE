import * as Checkbox from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"
import React from "react"
import { useDispatch } from "react-redux"
import { updateTodo } from "../../app/store"
import "./styles.css"

const CheckboxDemo = ({ isDone, id }) => {
	const dispatch = useDispatch()
	return (
		<form>
			<div style={{ display: "flex", alignItems: "center" }}>
				<Checkbox.Root
					onCheckedChange={() => dispatch(updateTodo(id))}
					checked={isDone}
					className="CheckboxRoot"
					id="c1"
				>
					<Checkbox.Indicator className="CheckboxIndicator">
						<CheckIcon />
					</Checkbox.Indicator>
				</Checkbox.Root>
			</div>
		</form>
	)
}
export default CheckboxDemo
