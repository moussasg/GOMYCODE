import React from "react"
import Classe from "./style.module.css"
export default function ItemCard({ OurPropProduct: { name, src, price } }) {
	return (
		<div className={Classe.cardContainer}>
			<h3>{name}</h3>
			<img src={src} alt="shoe" />
			<div>
				<p>{price}DA</p>
				<button>Add to card</button>
			</div>
		</div>
	)
}
