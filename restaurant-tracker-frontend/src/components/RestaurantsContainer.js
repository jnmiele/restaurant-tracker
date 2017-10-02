import React from 'react'
import { Redirect } from 'react-router-dom'
import Note from './Note'
import NoteForm from './NoteForm'
// import { loginParams } from '../services/user'
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
      const token = localStorage.getItem("jwtToken")
      const body = JSON.stringify(searchTerm)
      return fetch("http://localhost:3000/yelp", {
          method: "POST",
          headers: {
          'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`
         },
         'body': body
     })
      .then(res => res.json())
      .then(res => console.log(res))
    }

	addNote = (noteObject) => {
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
  	}).then((res)=>res.json()).then((res)=>{
  		let notes = [...this.state.notes, res]
	  		this.setState({
	  			notes: notes
	  		})
  		})

	}

	handleDelete = (event) => {
		const noteId = event.target.id
		const token = localStorage.getItem("jwtToken")
		const body = JSON.stringify({note_id: noteId})

		return fetch("http://localhost:3000/notes", {
			'method': 'delete',
			'headers': {
				'Accept': 'application/json',
	      'Content-Type': 'application/json',
	      'Authorization': `${token}`
   		},
  		'body': body,
  	})
	}

	render(){
		console.log(this.state.notes)
		const notes = this.state.notes.map((note, index) => <Note key={note.id} id={note.id} title={note.title} body={note.body} rest={note.restaurant} handleDelete={this.handleDelete}/>)
		if (localStorage.getItem("jwtToken")) {
			return (
				<div className="container">
					<h1>Add a New Spot</h1>
					<YelpSearch handleSearch={this.handleSearch} />
					<NoteForm addNote={this.addNote} userId={this.state.userId}/>
					<br/>
					<br/>
					<h1>My Spots</h1>
					<div class="columns is-multiline">
						{notes}
					</div>
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

