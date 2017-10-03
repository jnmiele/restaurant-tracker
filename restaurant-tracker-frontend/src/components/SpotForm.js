import React from 'react'


const SpotForm = (props) => {
	this.handleChange = (event) => {
		event.preventDefault()
		const title = event.target.title.value
		const body = event.target.body.value
		const rest = props.rest
		const jwtDecode = require('jwt-decode')
		const token = localStorage.getItem("jwtToken")
		const userId = jwtDecode(token)
		props.addSpot( {spot: {title, body,	restaurant: rest,	user_id: userId.user_id}} )
	}
	return(
		<div>
			<form onSubmit={this.handleChange}>
				<div className="field is-grouped is-grouped-centered">
					<div className="control">
						<input className="input is-primary" type="text" name="title" placeholder="Title"/>
					</div>
					<div className="control">
						<input className="input is-primary" type="text" name="body" placeholder="Body"/>
					</div>
					<div className="control">
						<input className="button is-primary is-inverted is-outlined" type="submit" value="Add Spot" />
					</div>
					<div className="control">
						<input className="button is-danger is-outlined" type="reset" value="Cancel" />
					</div>
				</div>
			</form>
		</div>
	)
}

export default SpotForm