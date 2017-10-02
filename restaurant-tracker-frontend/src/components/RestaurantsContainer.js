import React from 'react'
import { Redirect } from 'react-router-dom'
// import Note from './Note'
// import NoteForm from './NoteForm'
// import { loginParams } from '../services/user'
import RestaurantsList from './RestaurantsList'


export default class RestaurantsContainer extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			username: '',
			userId: '',
			notes: [],
			searchResults: []
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

	render(){
		if (localStorage.getItem("jwtToken")) {
			return (
				<div className="container">
					<RestaurantsList notes={this.state.notes} handleDelete={this.handleDelete}/>
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

