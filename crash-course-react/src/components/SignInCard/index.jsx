export default function SignInCard() {
		const handleSubmit = (e) => { // e.target : li srate 3lih évenement
		e.preventDefault() // bach ma yetroloadach site
		const dataForm = new FormData(e.target)// FormData objet sera remplie par key-value dans chaque input 
		console.log(Object.fromEntries(dataForm)) // fromEntries ( [key-value] tredo objet {key:value})
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<button type="submit">sign in</button>
			</form>
		</div>
	)
}
