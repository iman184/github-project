import React, {Fragment} from 'react'
import '../css/Header.css';
import image from '../images/image.svg';


const Home = () =>  (
        <Fragment>
           <header id="header-welcome">
                <div className="container ">
                    <div className="row align-items-start ">
                    <div className="col first-div"><h1>Welcome in ,
                        <br />
                        <span className="span"><b>Git</b></span>hub Search Users</h1>
                        <p className="parag-padd">By using this app you can find the users in github and see their profiles and their repository easily and so fast </p>
                        <button type="button" className="btn btn-color">Search users</button>
                    </div>
                    <div className="col second-div">
                        <img src={image} width="600px" />
                    </div>
                    </div>
                </div>
                </header>
        </Fragment>
    )

export default Home;