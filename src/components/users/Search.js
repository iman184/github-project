import React , {useState, useContext ,Fragment} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
import imgSearch from '../../img/Search engine _Monochromatic.svg'
import Navbar from '../../components/Pages/Navbar'
import Alert from '../layout/Alert'
import '../css/Searches.css'
const Search =()=> {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  
  const [text,setText]=useState('')


  const onChange=e=>setText(e.target.value)
  const onSubmit=e=>{ 
       e.preventDefault();
       if(text === ''){
        alertContext.setAlert('Please enter something','light');
       }else{
      githubContext.searchUsers(text);
        setText('');
       }
   }
    
        return (
              <section className="search">
                {/* Navbar */}      
                <Navbar />
                <div>
                {/* Search */}
                {/*Seaarch photo and input*/}  
                <div className=" container add">
                    <div className="row">
                    <div className="col logo-search">
                        <img src={imgSearch} width="550px" />
                    </div>
                    </div>
                    <Alert />
                    <form onSubmit={onSubmit}>
                    <div className="input-group mb-3 pt-2 input-style">
                    <input className="form-control form-control-lg" 
                    type="text" 
                    placeholder="Search User....."
                    value={text}
                    onChange={onChange}
                     />
                    <span className="input-group-text"  id="basic-addon1"><i className="fas fa-search"/></span>
                    </div>
                    </form>
                </div>
                {githubContext.users.length > 0 &&(
                <div className="text-center mt-5">
                    <h2>Users</h2>
                    <p>You will find all users that they register here</p>
                    <a href="#" onClick={githubContext.clearUsers}  className="button">Clear <i className="fas fa-chalkboard" /></a>
                </div>
               )}
                
                
                    </div>
                    
                    </section>
                )
            }



export default Search