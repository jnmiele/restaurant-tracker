import React from 'react'
import { Redirect } from 'react-router-dom'
import Note from './Note'
import NoteForm from './NoteForm'
import { loginParams } from '../services/user'
import YelpSearch from './YelpSearch'


export default class RestaurantsContainer extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			username: '',
			userId: '',
			notes: []
		}
	}

	componentDidMount(){
		const jwtDecode = require('jwt-decode')
		const token = localStorage.getItem("jwtToken")
		const decoded = jwtDecode(token)

		return fetch("http://localhost:3000/users/"+decoded.user_id, {
			headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${token}`
   		}
		}
		)
		.then(res => res.json())
		.then(res => this.setState({
			username: res.username,
			userId: res.id,
			notes: res.notes
		})
	)
	}

	handleSearch = (searchTerm) => {
		console.log("look for this:", searchTerm)
	}

	addNote = (noteObject) => {
		console.log("pass to DB", noteObject)
		console.log(this.state)
		const token = localStorage.getItem("jwtToken")
		const body = JSON.stringify(noteObject)

		return fetch("http://localhost:3000/notes", {
			'method': 'post',
			'headers': {
				'Accept': 'application/json',
	      'Content-Type': 'application/json',
	      'Authorization': `${token}`
   		},
  		'body': body,
  	})
		// this.setState({
		// 	username: this.state.username,
		// 	userId: this.state.userId,
		// 	notes: [...this.state.notes, noteObject]
		// }, ()=>{console.log(this.state)})
	}

	render(){
		const notes = this.state.notes.map((note, index) => <Note key={index} title={note.title} body={note.body} rest={note.restaurant}/>)
		if (localStorage.getItem("jwtToken")) {
			return (
				<div>
					<YelpSearch handleSearch={this.handleSearch} />
					<NoteForm addNote={this.addNote} userId={this.state.userId}/>
					<h1>MY SPOTS</h1>
					<table>
						<tbody>
							<tr>
								<th>Name:</th>
								<th>Address: </th>
								<th>Neighborhood:</th>
								<th>Yelp Rating:</th>
								<th>Notes</th>
							</tr>
						</tbody>
						{notes}
					</table>
				</div>
			)
		} else if (this.props.location.pathname === "/login"){
				 return null
		} else {
			return (<Redirect to="/login"/>)
		}
	}
}

// <-- High Order Components -->
// import React from 'react'
//
// funtion Authorize(RenderedComponent, props) {
//   return class extends React.Componenet {
//
//	  componentDidMount() {
//			if        i am logged in             &&        i am currently on /login
//		 	if (localStorage.getItem("jwtToken") && this.props.location.pathname === "/login") {
//			  this.props.history.push('/spots')
//			otherwise if        im not logged in         &&         I am not not on /login
//			} else if (!localStorage.getItem("jwtToken") && this.props.location.pathname !== "/login"){
//			  this.props.history.push('login')
//			}
//		}
//		render() {
//			return(
//				<RenderedComponent {...this.props} {...props}/>
//			)
//		}
//	}
//}
//
// export default Authorize

