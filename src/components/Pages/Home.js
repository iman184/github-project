import React, {Fragment} from 'react'
import '../css/Header.css';
import image from '../images/image.svg';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = () =>  (
        <Fragment>
           
  
     
 
    
           <div className="logo-size">
           <h1 className="title">Git<span className="title-color"><b>Men</b></span></h1>
           </div>
          
           <header id="header-welcome">
              
                <div className="container ">
                    <div className="row align-items-start ">
                    <div className="col first-div"><h1>Welcome in ,
                        <br />
                        <span className="span"><b>Git</b></span>hub Search Users</h1>
                        <p className="parag-padd">By using this app you can find the users in github and see their profiles and their repository easily and so fast </p>
                        <Link to="/searches" href="#"><button type="button" className="btn btn-color">Search users</button></Link>
                    </div>
                    <div className="col second-div">
                        <img src={image} width="600px" />
                    </div>
                    </div>
                </div>
                </header>
        </Fragment>
    )
    Home.propTypes={
        title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
       }

export default Home;