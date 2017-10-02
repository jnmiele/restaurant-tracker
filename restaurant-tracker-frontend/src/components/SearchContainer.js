import React from 'react'

import SpotForm from './SpotForm'
import SearchResult from './SearchResult'
import SearchResults from './SearchResults'

class SearchContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            userId: '',
            spots: [],
            search: '',
            rest: {},
            found: false
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        const restName = event.target.rest.value
        this.setState({
            search: restName
        }, () => this.props.handleSearch(restName))
    }

    updateFound = (restaurant) => {
        this.setState({
            rest: restaurant,
            found: true
        })
    }

    render(){
        if (this.state.found === true) {
            return( 
                <div className="container">
                    <h1> Enter your notes: </h1>
                    <SpotForm addSpot={this.props.addSpot} rest={this.state.rest}/>
                    <div className="field is-grouped is-grouped-centered">
                        <SearchResult result={this.state.rest} found={this.state.found} />
                    </div>
                </div>
            )
        } else {
          return(
            <div>
                <h1> Search for a spot: </h1>
                <div className="field is-grouped is-grouped-centered">
                  <form onSubmit={this.onSubmit}>
                    <div className="field is-grouped is-grouped-centered">
                      <input className="input" type="text" name="rest" placeholder="Enter the name..."/>
                    </div>
                    <div className="field is-grouped is-grouped-centered">
                      <input className="button" type="submit" value="Search"/>
                    </div>
                  </form>
                </div>
                <SearchResults updateFound={this.updateFound} results={this.props.searchResults} {...this.props}/>
            </div>
        )  
        } 
    }
}

export default SearchContainer