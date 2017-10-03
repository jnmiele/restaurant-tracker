import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = (props) => {

	return(
		<nav className="navbar" aria-label="main navigation" onClick={props.handleLogout}>
      <div className="navbar-brand">
        <a className="navbar-item" href="http://localhost:3001/spots">
          <img src="http://www.iconsdb.com/icons/preview/deep-pink/map-marker-2-xxl.png" alt="📍" width="28" height="28"/>
          <a className="navbar-item spots-title"><strong>Spots</strong></a>
        </a>
      </div>
      <div className="navbar-menu navbar-end">
        <div className="navbar-item">
        	<Link to='/spots' ><a>My Spots</a></Link>
        </div>
        <div className="navbar-item">
        	<Link to='/spots/new'><a>Add New Spot</a></Link>
        </div>
        <div className="navbar-item">
        	{(localStorage.getItem("jwtToken")) ? <a data-id="logout">Logout</a> : <a>Login</a> }
        </div>
      </div>
    </nav>
	)
}

export default NavBar