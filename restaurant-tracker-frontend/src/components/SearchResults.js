import React from 'react'

import SearchResult from './SearchResult'

class SearchResults extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			rest: {}
		}
	}

	render(){
		if (this.props.results.length !== 0) {
			const results = this.props.results.map((result, index) => <SearchResult key={index} result={result} />)
			return(
				<div className="columns is-multiline">
					{results}
				</div>
			)
		} else {
			return(null)
		}
	} 
}
export default SearchResults