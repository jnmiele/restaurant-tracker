import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import Nav from './components/Nav'
import { Redirect, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { loginUser } from './services/user'
import RestaurantsContainer from './components/RestaurantsContainer'
import SearchContainer from './components/SearchContainer'

class App extends Component {

  state = {
    user: {},
    search: [],
    spots: [],
    isLoggedIn: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((json) => {

        // console.log(json)

      })
  }

  login = (loginParams) => {
    loginUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user,
          isLoggedIn: true
        })
      })
  }

  addSpot = (spotObject) => {
    const token = localStorage.getItem("jwtToken")
    const body = JSON.stringify(spotObject)
    debugger

    return fetch("http://localhost:3000/spots", {
      'method': 'post',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      'body': body,
    }).then((res)=>res.json())
    .then((res)=>{
      let spots = [...this.state.spots, res]
        this.setState({
          spots: spots 
        })
      })
  }

  handleSearch = (searchTerm) => {
    const token = localStorage.getItem("jwtToken")
    const body = JSON.stringify(searchTerm)
    return fetch("http://localhost:3000/yelp", {
        method: "POST",
        headers: {
        'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `${token}`
       },
       'body': body
   })
    .then(res => res.json())
    .then(res => res = res.businesses.slice(0,8))
    .then(res => this.setState({
      search: res
    }))
  }

  render() {
      return (
        <div className="App">
          <Route path="/login" render={(props) => <LoginForm onLogin={this.login} {...props}/>}/>
          <Route path="/spots" render={(props) => <RestaurantsContainer user={this.state.user} handleDelete={this.handleDelete} spots={this.state.spots} {...props}/>}/>
          <Route path='/new' render={(props) => <SearchContainer searchResults={this.state.search} handleSearch={this.handleSearch}  addSpot={this.addSpot} {...props}/>} />
        </div>
      );
  }

}


export default App;
  // <Route path="/" component={Nav}/>

  // const AuthRestContainer = Authorize(RestaurantsContainer)
  // <Route path="/spots" render={(props) => <AuthRestContainer {...props} /> } />

  // const AuthLoginForm = Authorize(LoginForm)
  // <Route path="/login" render={(props) => <AuthLoginForm /> } />

