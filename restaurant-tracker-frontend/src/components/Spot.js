import React from 'react'

class Spot extends React.Component {

	state ={
		flipped: false
	}

	handleFlip = (event) => {
		if (event.target.dataset.name === "flip"){
			this.setState({
				flipped: !this.state.flipped
			})
		}
	}
	render(){
		const created_at = new Date(this.props.rest.created_at)
		if (this.state.flipped === false) {
			return(
			<div className="column is-one-quarter">
				<div className="card">
				  <div className="card-image">
				    <figure className="image is-4by3">
				      <img src={this.props.rest.image_url} alt=""/>
				    </figure>
				  </div>
				  <div className="card-content">
				    <div className="media">
				      <div className="media-content">
				        <p className="title is-4">{this.props.rest.name}: <em className="title is-5">{this.props.rest.neighborhood}</em></p>
				        <p className="title is-6"><a>{this.props.rest.address.replace(',N', ', N')}</a> <br/>Yelp Rating: {this.props.rest.rating} <br/>How expensive?: {this.props.rest.price}</p>
				      </div>
				    </div>
				    <div className="content">
				      <time><strong>Added:</strong> {created_at.getMonth()+1}.{created_at.getDate()}.{created_at.getFullYear()}</time><br/>
				    	
				    </div>
				  	  <footer className="card-footer">
				      	<a className="card-footer-item" onClick={this.props.handleDelete} data-id={this.props.id} id={this.props.id}>Delete Spot</a>
				      	<a data-name="flip" className="card-footer-item" onClick={this.handleFlip} data-id={this.props.id} id={this.props.id}>Show My Notes</a>
				      </footer>
				  </div>
				  </div>
				</div>
			)
		} else {
			return(
		<div className="column is-one-quarter">
			<div className="card">
			  <div className="card-image">
			    <figure className="image is-4by3">
			      <img src={this.props.rest.image_url} alt=""/>
			    </figure>
			  </div>
			  <div className="card-content">
			    <div className="media">
			      <div className="media-content">
			        <p className="title is-4">{this.props.rest.name}: <em className="title is-5">{this.props.rest.neighborhood}</em></p>
			        <strong>{this.props.title}:</strong> {this.props.body}
			      </div>
			    </div>
			    <div className="content">
			      <time><strong>Added:</strong> {created_at.getMonth()+1}.{created_at.getDate()}.{created_at.getFullYear()}</time><br/>
			    	
			    </div>
			  	  <footer className="card-footer">
			      	<a className="card-footer-item" onClick={this.props.handleDelete} data-id={this.props.id} id={this.props.id}>Delete Spot</a>
			      	<a data-name="flip" className="card-footer-item" onClick={this.handleFlip} data-id={this.props.id} id={this.props.id}>Show My Notes</a>
			      </footer>
			  </div>
			  </div>
			</div>

	)
		}
	}
	
}
export default Spot
