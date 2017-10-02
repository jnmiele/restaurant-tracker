import React from 'react'

export default class NoteForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			restaurant_id: "",
			user_id: this.props.userId,
			title: "",
			body: ""
		}
	}

	handleChange = (event) => {
		event.preventDefault()
		const title = event.target.title.value
		const body = event.target.body.value
		const rest = event.target.rest.value
		this.setState({
			title,
			body
		}, ()=>{this.props.addNote({note: {title, body,	restaurant: rest,	user_id: 1}})})
	}

	render() {
		return(
			<form onSubmit={this.handleChange}>
			<div className="field is-grouped is-grouped-centered">
			<div className="control">
				<input className="input is-primary" type="text" name="rest" placeholder="Restaurant"/>
			</div>
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
		)
	}
}