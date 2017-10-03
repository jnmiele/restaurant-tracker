import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import { loginUser } from './services/user'
import RestaurantsContainer from './components/RestaurantsContainer'
import NavBar from './components/NavBar'

class App extends Component {

  state = {
    user: {},
    search: [],
    spots: [],
    isLoggedIn: localStorage.getItem("jwtToken") ? true : false
  }

  componentDidMount() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((json) => {
      })
  }

  login = (loginParams) => {
    loginUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user
        })
      })
  }

  signup = (signupParams) => {
    const body = JSON.stringify(signupParams)
    return fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    })
    .then(res => res.json())
    .then(res => this.login({username: signupParams.username, password: signupParams.password }))
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

  handleLogout = (event) => {
      if (event.target.dataset.id === "logout") {
        localStorage.removeItem("jwtToken")
        this.setState({
          user: {},
          spots: []
        })
      }
  }
  render() {
      return (
        <div className="App">
          <NavBar handleLogout={this.handleLogout}/>
          <Route path="/login" render={(props) => <LoginForm onLogin={this.login} {...props}/>}/>
          <Route path="/signup" render={(props) => <SignupForm onSignup={this.signup} {...props}/>}/>
          <Route path="/spots" render={(props) => <RestaurantsContainer user={this.state.user} spots={this.state.spots} {...props} searchResults={this.state.search} handleSearch={this.handleSearch}/>}/>
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

