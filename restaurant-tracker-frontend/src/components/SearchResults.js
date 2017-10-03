import React from 'react'

import SearchResult from './SearchResult'

const SearchResults = (props) => {
	if (props.results.length !== 0) {
		const results = props.results.map((result, index) => <SearchResult updateFound={props.updateFound} key={index} result={result} />)
		return(
			<div className="columns is-multiline">
				{results}
			</div>
		)
	} else {
		return(null)
	}

}
export default SearchResults