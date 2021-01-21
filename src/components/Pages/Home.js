import React, {Fragment} from 'react'
import '../css/Header.css';
import image from '../../img/Pair programming-pana.svg';

import { Link } from 'react-router-dom'


const Home = () =>  (
        <Fragment>
            <div>
       <h2 className='spans'>Git<span className="span">Men</span></h2>
        <header className="header-welcome content">
          <div className="container ">
            <div className="row align-items-start ">
              <div className="col first-div"><h1>Welcome in ,
                  <br />
                  <span className="span"><b>Git</b></span>hub Search Users</h1>
                <p className="parag-padd">By using this app you can find the users in github and see their profiles and their repository easily and so fast </p>
                <Link to='/searches' type="button" className="btn btn-color">Search users</Link>
              </div>
              <div className="col second-div">
                <img src={image} width="600px" />
              </div>
            </div>
          </div>
        </header>
      </div>  
        </Fragment>
    )
   

export default Home;