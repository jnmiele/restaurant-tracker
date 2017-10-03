import React from 'react'

const Spot = (props) => {
	const created_at = new Date(props.rest.created_at)
	return(

		<div className="column is-one-quarter">
			<div className="card">
			  <div className="card-image">
			    <figure className="image is-4by3">
			      <img src={props.rest.image_url} alt=""/>
			    </figure>
			  </div>
			  <div className="card-content">
			    <div className="media">
			      <div className="media-content">
			        <p className="title is-4">{props.rest.name}: <em className="title is-5">{props.rest.neighborhood}</em></p>
			        <p className="subtitle is-6"><a>{props.rest.address}</a> || Rating: {props.rest.rating}</p>
			      </div>
			    </div>
			    <div className="content">
			      <strong>{props.title}:</strong> {props.body}
			      <br/>
			      <time><strong>Added:</strong> {created_at.getMonth()}.{created_at.getDate()}.{created_at.getFullYear()}</time><br/>
			      <button onClick={props.handleDelete} data-id={props.id} id={props.id} className="delete"></button>
			    </div>
			  </div>
			  </div>
			</div>

	)
}
export default Spot