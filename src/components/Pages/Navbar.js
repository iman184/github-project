import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>  (
        <Fragment>
           
<nav className="navbar navbar-expand-sm navbar-light">
{/* Brand/logo */}
<a className="navbar-brand fab fa-github" href="#" />
<h3>Git<span className="title-color"><b>Men</b></span></h3>
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
</Fragment>
)
export default Navbar