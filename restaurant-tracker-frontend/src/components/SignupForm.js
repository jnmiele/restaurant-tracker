import React from 'react'
import { Redirect } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const signupParams = { username: this.state.username, password: this.state.password}
    this.props.onSignup(signupParams)
    this.setState({
      username: "",
      password:""
    })
  }


  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  render() {
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/spots"/>
    } else {
      return (
        <div className="container">
        <h1>Signup Here</h1>
        <form onSubmit={this.handleSubmit} className="field is-grouped is-grouped-centered">
          <div className="control">
          <input className="input is-primary" type="text" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username}/>
          </div>
          <div className="control">
          <input  className="input is-primary" type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          </div>
          <div className="control">
          <input className="button is-primary is-inverted is-outlined" type="submit" value="Submit"/>
          </div>
        </form>
        <br/>
        </div>
      )
    }
  }

}

export default SignupForm