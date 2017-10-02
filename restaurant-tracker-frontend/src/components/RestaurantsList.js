import React from 'react'
import Note from './Note'
import { Link } from 'react-router-dom'
class RestaurantsList extends React.Component {
	render(){
		const notes = this.props.notes.map((note, index) => <Note key={note.id} id={note.id} title={note.title} body={note.body} rest={note.restaurant} handleDelete={this.props.handleDelete}/>)
		return(
			<div className="container">
				<h1>My Spots</h1>
				<h3><Link to='/new'>Add a New Spot</Link></h3>
				<div className="columns is-multiline">
					{notes}
				</div>
			</div>
		)
	}
}

export default RestaurantsList