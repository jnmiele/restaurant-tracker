import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import RestaurantsList from './RestaurantsList'
import SearchContainer from './SearchContainer'


export default class RestaurantsContainer extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			username: '',
			userId: '',
			spots: [],
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
		})
		.then(res => res.json())
		.then(res => this.setState({
			username: res.username,
			userId: res.id,
			spots: res.spots
		})
	)}

	handleDelete = (event) => {
    const id = parseInt(event.target.dataset.id);
    const token = localStorage.getItem("jwtToken")
    const body = JSON.stringify({spot_id: id})
    return fetch("http://localhost:3000/spots", {
      'method': 'delete',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      'body': body,
    }).then(() => {
			let newState = [...this.state.spots];
			newState = newState.filter((spot) => spot.id !== id);
    	this.setState({spots: newState});
    })
	}

	addSpot = (spotObject, props) => {
    const token = localStorage.getItem("jwtToken")
    const body = JSON.stringify(spotObject)

    return fetch("http://localhost:3000/spots", {
      'method': 'post',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      'body': body,
    }).then((res)=>res.json())
    .then((res)=>{
      let spots = [...this.state.spots, res]
        this.setState({
          spots: spots 
        })
      })
    .then(() => {
      this.props.history.push('/spots')
    })
  }	

	render(){
		if (localStorage.getItem("jwtToken")) {
			return (
				<div className="container">
					<Route exact path='/spots' render={(props) => <RestaurantsList spots={this.state.spots} addSpot={this.spot} handleDelete={this.handleDelete} location={this.props.location}/>}/>
          <Route exact path='/spots/new' render={(props) => <SearchContainer addSpot={this.addSpot} searchResults={this.props.searchResults} handleSearch={this.props.handleSearch}/>}/>
				</div>
			)
		} else if (this.props.location.pathname === "/login"){
				 return null		
		} else {
			return (<Redirect to="/login" />)
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

