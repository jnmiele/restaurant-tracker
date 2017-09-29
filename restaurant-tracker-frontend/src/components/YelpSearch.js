import React from 'react'

class YelpSearch extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            search: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        const restName = event.target.rest.value
        this.setState({
            search: restName
        }, () => this.props.handleSearch({restaurantName: restName}))
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="rest" placeholder="Restaurant Name"/>
            </form>
        )
    }

}

export default YelpSearch