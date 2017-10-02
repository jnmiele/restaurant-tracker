import React from 'react'

import SearchResults from './SearchResults'

class YelpSearch extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            userId: '',
            notes: [],
            search: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        const restName = event.target.rest.value
        this.setState({
            search: restName
        }, () => this.props.handleSearch(restName))
    }

    render(){
        return(
            <div>
                <h1> YELP SEARCH </h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="rest" placeholder="Restaurant Name"/><br/>
                    <input type="submit" value="Search"/>
                </form>
                <SearchResults results={this.props.searchResults}/>
            </div>
        )
    }
}

export default YelpSearch