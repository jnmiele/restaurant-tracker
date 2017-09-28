import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import Nav from './components/Nav'
import { Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { loginUser } from './services/user'
import RestaurantsContainer from './components/RestaurantsContainer'

class App extends Component {

  state = {
    user: {},
    isLoggedIn: false
  }


  logout = () => {
    
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


  render() {
      return (
        <div className="App">
          <Route path="/login" render={(props) => <LoginForm onLogin={this.login} {...props}/>}/>
          <Route path="/spots" render={(props) => <RestaurantsContainer user={this.state.user} {...props}/>}/>
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

