import React from 'react'

const Note = (props) => {
	return(
		<tbody>
			<tr>
				<td>{props.rest.name}</td>
				<td>{props.rest.address}</td>
				<td>{props.rest.neighborhood}</td>
				<td>{props.rest.rating}</td>
				<td><strong>{props.title}:</strong> {props.body}</td>
				<td><button onClick={props.handleDelete} id={props.id}>X</button></td>
			</tr>
		</tbody>
	)
}

export default Note