import React from 'react'
import Spot from './Spot'
import { Link } from 'react-router-dom'

class RestaurantsList extends React.Component {
	render(){
		const spots = this.props.spots.map((spot, index) => <Spot key={spot.id} id={spot.id} title={spot.title} body={spot.body} rest={spot.restaurant} handleDelete={this.props.handleDelete} {...this.props}/>)
		return(
			<div className="container">
				<h1>My Spots</h1>
				<h3><Link to='/spots/new'>Add a New Spot</Link></h3>
				<div className="columns is-multiline">
					{spots}
				</div>
			</div>
		)
	}
}

export default RestaurantsList