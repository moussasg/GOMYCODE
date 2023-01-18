import React from "react"
import ourimage from "../../assets/react.svg"
import style from "./index.module.css"
export default function Container({ OurProp }) {
	return (
		<div className={style.Container}>
			<img src={ourimage} alt="" />
			{OurProp}
		</div>
	)
}
