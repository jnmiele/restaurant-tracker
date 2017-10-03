import React from 'react'

const SearchResult = (props) => {

	this.handleClick = (event) => {
		if (event.target.className.includes("select-spot")) {
			const restaurant = event.target.dataset
			props.updateFound(restaurant)
		}
	}

	return(
		<div className="column is-one-quarter" onClick={this.handleClick}>
			<div className="card">
			  <div className="card-image">
			    <figure className="image is-4by3">
			      <img src={props.result.image_url} alt=""/>
			    </figure>
			  </div>
			  <div className="card-content">
			    <div className="media">
			      <div className="media-content">
			        <p className="title is-4">{props.result.name}: <em className="title is-5">{props.result.neighborhood}</em></p>
			        <p className="subtitle is-6"><a>{props.result.location.display_address}</a> || Rating: {props.result.rating}</p>
			        { props.found ? null : <button className="select-spot button is-info is-outlined"
			        data-name={props.result.name}
			        data-image_url={props.result.image_url}
			        data-location={props.result.location.display_address}
			        data-rating={props.result.rating}
			        data-price={props.result.price}
			        > Select This Spot </button> }
			      </div>
			    </div>
			  </div>
			  </div>
			</div>
			)
}

export default SearchResult