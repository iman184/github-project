import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../css/About.css';
import image from '../../img/Analytics-cuate.png'
import image1 from '../../img/group.svg'
import image2 from '../../img/user.svg'
import image3 from '../../img/video.svg'
import image4 from '../../img/what we are.svg'
import image5 from '../../img/Website Creator-rafiki.svg'
const About = () => {
    return (
        <Fragment>
            <div>
        {/*Header*/}
        <header>
          <div className="mainheader">
            {/*Navbar*/} 
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
            </nav></div>
          <div className="row main-content">
            <div className="col-sm left-sec">
              <h1>About Us</h1>
              <h2>We are here for your care</h2>
              <br />
              <div className="description">
                We develope  and we made this app 
                to help you find users<br />
                Not just that because our app make you able to see 
                <br />
                their repository too 
              </div>
              <br /><br />
              <a href className="btn-rounded">Discover more</a>
            </div>
            <div className="col-sm right-sec">
              <img src={image} className="img-fluid " alt="" /> 
            </div>
          </div>
        </header>
        {/* section 01*/}
        <section className="background-sec">
          <div className="title-sec">
            <h2><b>Features of Github</b></h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="d-flex justify-content-center">
                  <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                      <img src={image1} className="img-sec img-fluid" height="200px" />
                      <div className="my-4">  
                        <h5 className="card-title">Users</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Search and find them</h6>
                        <p className="card-text">Search and find the user that you need quiqly . our servent will help you to find theme and give you more datails</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex justify-content-center">
                  <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                      <img src={image2} className="img-sec img-fluid" height="175px" />
                      <div className="my-2">
                        <h5 className="card-title top-padd1">Profiles</h5>
                        <h6 className="card-subtitle mb-2 text-muted">See their profiles</h6>
                        <p className="card-text">You can see the profiles of users and follow theme see how many repos they have and some other things</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex justify-content-center">
                  <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                      <img src={image3} className="img-sec img-fluid" height="160px" />
                      <div className="my-2">
                        <h5 className="card-title top-padd">Repository</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Find their repository</h6>
                        <p className="card-text">Find the repository and also see how many projects they have , open it and discover  the repository they have </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 02*/}
        <section className="sec2 my-5">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img src={image4} className="img-style" alt="" /> 
              </div>
              <div className="col-sm">
                <div className="sec2-title">
                  <h1><b>Who</b></h1>
                  <h1><b>We are ?</b></h1>
                </div>
                <br />
                <div className="para-sec">
                  Hello! We are team developper , my name is imen and my pattern mohemmed ,i am front end developper and mohemmed is full stack web developer  
                  and this site is first project in Desgin,we used some skills Bootstrap, 
                  React and Css for build all that, we hope is good and followe us in our social media above 
                  this article, if you want work with me you can contacte in my email. 
                  <br />
                  Not just that because our app make you able to see 
                  <br />
                  their repository too 
                </div>
                <br /><br />
                <a href className="btn-sec btn-1"><i className="fab fa-github font-wes" /> Github Repo</a>
              </div>
            </div>
          </div>
        </section>
        {/*section 3*/}
        <section className="section3">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="sec3-title">
                  <h1><b>Tools</b></h1>
                </div>
                <br />
                <div className="para-sec">
                  Bootstrap and React were used mainly in this simple project as well as in some synergies from CSS.
                  Those tools help us to build this simple app easily and add  awesome features 
                </div>
                <br /><br />
                <a href className="btn-sec3 btn-1"><i className="fab fa-react font-wes" /> React</a>
                <a href className="btn-sec3 btn-1 padd-left"><i className="fab fa-bootstrap font-wes" /> Bootstrap</a>
              </div>
              <div className="col-sm">
                <img src={image5} className="img-style" alt="" /> 
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="container">
              <div className="center-logo-sec"><h1><b className="color-logo">Git</b>Men</h1> </div>
              <p>we hope you can use our app easily and you didn't face problems </p>
              <ul className="socials">
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-google-plus" /></a></li>
                <li><a href="#"><i className="fab fa-youtube" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
              </ul>
            </div>
            <div className="footer-bottom">
              <p>copyright ©2020 codeOpacity. designed by <span>Mohemmed and Imen</span></p>
            </div>
          </div>
        </footer>
      </div>
        </Fragment>
    )
}
export default About