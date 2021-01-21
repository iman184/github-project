import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../css/Searches.css'
const Navbar = () =>  (
        <Fragment>
           <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <div className="center-logo"> <a className="navbar-brand fab fa-github" href="#"><b className="color-logo">Git</b>Men</a></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/searches' className="nav-link active" href="#">Search</Link>
                </li>
                <li className="nav-item">
                  <Link to='/about' className="nav-link active" href="#">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
</Fragment>
)
export default Navbar