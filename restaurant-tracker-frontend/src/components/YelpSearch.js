import React from 'react'

class YelpSearch extends React.Componenet {
	constructor(props){
		super(props)

		this.state = {
			search: ''
		}
	}

	onChange = (event) => {
		const searchTerm = event.target.value
		this.setState({
			search: searchTerm
		}, this.props.handleSearch(searchTerm))
	}

	render(){
		return(
			<input type="text" value={this.state.value} onChange={this.onChange} />
		)
	}

}

export default YelpSearch