import React from 'react'

export default class NoteForm extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			title: "",
			body: ""
		}
	}

	handleChange = (event) => {
		event.preventDefault()
		const title = event.target.title.value
		const body = event.target.body.value
		this.setState({
			title,
			body
		}, this.props.addNote({title, body}))
	}

	render() {
		return(
			<form onSubmit={this.handleChange}>
				<input type="text" name="title" placeholder="Title"/>
				<input type="text" name="body" placeholder="Body"/>
				<input type="submit" value="New Note" />
			</form>
		)
	}
}