import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import Nav from './components/Nav'
import { Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { loginUser } from './services/user'
import RestaurantsContainer from './components/RestaurantsContainer'
import YelpSearch from './components/YelpSearch'

class App extends Component {

  state = {
    user: {},
    search: [],
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

  addNote = (noteObject) => {
    const token = localStorage.getItem("jwtToken")
    const body = JSON.stringify(noteObject)

    return fetch("http://localhost:3000/notes", {
      'method': 'post',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      'body': body,
    }).then((res)=>res.json()).then((res)=>{
      let notes = [...this.state.notes, res]
        this.setState({
          notes: notes
        })
      })
  }

  handleDelete = (event) => {
    const noteId = event.target.id
    const token = localStorage.getItem("jwtToken")
    const body = JSON.stringify({note_id: noteId})

    return fetch("http://localhost:3000/notes", {
      'method': 'delete',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      'body': body,
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
          <Route path="/spots" render={(props) => <RestaurantsContainer user={this.state.user} {...props}/>}/>
          <Route path='/new' render={(props) => <YelpSearch searchResults={this.state.search} handleSearch={this.handleSearch} handleDelete={this.handleDelete} addNote={this.addNote} {...props}/>} />
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

