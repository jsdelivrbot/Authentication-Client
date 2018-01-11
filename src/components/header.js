import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Authentication</Link>
        <ul className="nav navbar-nav">
        { this.renderLinks() }
        </ul>
      </nav>
    )
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link to='/signout' className="nav-link">Sign Out</Link>
        </li>
      )
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to='/signup' className="nav-link" >Sign Up</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to='/signin' className="nav-link" >Sign In</Link>
        </li>
      ]
    }
  }
}

function mapStateToProps({ auth: { authenticated } }) {
  return {
    authenticated
  }
}
export default connect(mapStateToProps)(Header)
