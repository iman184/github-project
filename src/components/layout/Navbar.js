import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const  Navbar =()=> {
    return (
      <nav className="navbar navbar-expand-sm navbar-light">
      {/* Brand/logo */}
      <a className="navbar-brand fab fa-github" href="#" />
      <h3 className="title">Git<span className="title-color"><b>Men</b></span></h3>
      {/* Links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/'className="nav-link" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/searches' className="nav-link" href="#">Search</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link " href="#">About</Link>
        </li>
      </ul>
    </nav>
 
    )
}

Navbar.propTypes={
  title:PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired
 }
export default Navbar;
