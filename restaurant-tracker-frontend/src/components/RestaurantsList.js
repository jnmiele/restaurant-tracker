import React from 'react'
import Spot from './Spot'
import { Link } from 'react-router-dom'

class RestaurantsList extends React.Component {

	render(){
		const spots = this.props.spots.map((spot, index) => <Spot key={spot.id} id={spot.id} title={spot.title} body={spot.body} rest={spot.restaurant} handleDelete={this.props.handleDelete} {...this.props}/>)

		return(
			<div className="container">
				<h1>My Spots</h1>
				<h3 className='add-new-spot'><Link to='/spots/new'><span id="add-new-spot">Add a New Spot</span></Link></h3>
				<div onClick={this.props.handleButtonClick} className="buttons-for-sort">
					<button className="button is-primary is-warning is-outlined is-small" value="name" data-name="sort-by-name"> Sort by Name </button> <button className="button is-primary is-warning is-outlined is-small" value="price" data-name="sort-by-price"> Sort by Price </button> <button className="button is-primary is-warning is-outlined is-small" value="rating" data-name="sort-by-rating"> Sort by Rating </button>
				</div>
				<div className="columns is-multiline">
					{spots}
				</div>

			</div>
		)
	}

}

export default RestaurantsList