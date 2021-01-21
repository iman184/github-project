import React , { Fragment, useEffect, useContext} from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'
import '../css/Profile.css'
import repository from '../../img/repository.svg'
import gist from '../../img/gift-box.svg'
import pin from '../../img/pin.svg'

const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    
    const { getUser, loading, repos,user, getUserRepos } = githubContext;

    useEffect(()=>{
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    },[])
  
  
  
     

        const{ 
            name, 
            avatar_url,
            location,
            company,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }= user;
     
        if(loading) return<Spinner />;
    return <Fragment>
         {/* Pofile user */}
      {/* back to search and available*/}
      <section className="background-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm styling">
              <Link to='/' className="btn btn-light"> Back To Search </Link>
            </div>
            <div className="col-sm stylings">
            Hireable:{' '}
        {hireable ? ( <i className="fa fa-check text-success" />):(
            <i className='fas 
            fa-times-circle text-danger' />)}
            </div>
          </div>
        </div>
        {/* following and followers*/}
        <div className="container">
          <div className="row style-grid ">
            <div className="col-sm">
              <a to="/" className="padding-a1 btn-light"><img src={repository} width="22%" /><b className="padding-a2">{followers}</b></a><p><small className="move"> Followers</small></p> 
            </div>
            <div className="col-sm">
              <a to="/" className="padding-a1 btn-light"><i className="fas fa-user-friends mod-img" /><b className="padding-a2">{following}</b></a><p><small className="move">Following</small></p>
            </div>
            <div className="col-sm">
              <a to="/" className="padding-a1 btn-light"><i className="fas fa-user-plus" /><b className="padding-a2">{public_repos}</b></a><p><small className="move"> Repos</small></p>
            </div>
            <div className="col-sm">
              <a to="/" className="padding-a1 btn-light"><img className="mod-img" src={gist} width="22%" /><b className="padding-a2">{public_gists}</b></a><p><small className="move"> Gift</small></p> 
            </div>
          </div>
        </div>
        {/*profile*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="cards">
                <div className="card" style={{width: '18rem'}}>
                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <img className="round-img-profile img-fluid"  src={avatar_url} alt="" /> 
                    </div>
                    <h3 className="card-subtitle mb-2 ">{login}</h3>
                    <h5 className="card-text"><img src={pin} width="10%" />Location: {location}</h5>
                    <div className="button">
                      <a href={html_url} className="btn-1"><i className="fab fa-github font-wes" /> Visit Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='coll-sm-6'>
                <Repos repos={repos} />
                </div>
                
             
            </div>
          </div>
          
               
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className style={{width: '22rem'}}>
                <div className>
                  <h2 className="card-title center">Bio</h2>
                  <p className="card-text para">{bio}</p>
                </div>
              </div>
            </div>
            <div className="container bottom">
              <h6 className="pa-parag"><b>Username : </b>{login}</h6>
              <h6><b>Company : </b>{company}</h6>
              <h6><b>Website : </b>{blog}</h6>
            </div>
          </div></div></section>
 </Fragment>
         
   } 


export default User;