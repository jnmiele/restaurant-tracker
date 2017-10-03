import { Redirect } from 'react-router-dom'
import React from 'react'


const SpotForm = (props) => {
	this.handleChange = (event) => {
		event.preventDefault()
		const title = event.target.title.value
		const body = event.target.body.value
		const rest = props.rest
		props.addSpot( {spot: {title, body,	restaurant: rest,	user_id: 1}} )
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