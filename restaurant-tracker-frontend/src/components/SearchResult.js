import React from 'react'

const SearchResult = (props) => {
	return(
				<div className="column is-one-quarter">
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
					      </div>
					    </div>
					  </div>
					  </div>
					</div>
					)
}

export default SearchResult