import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import User from './components/users/User'
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound'
import Searches from './components/Pages/Searches'
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App =()=> {
    return (
      
      <GithubState >
        <AlertState>
      <Router>
      <div className="App">
     <Switch>
       <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/user/:login' component={User}/>
      <Route exact path='/searches' component={Searches}/>
      <Route  component={NotFound}/>
      </Switch>
   </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  

      }
export default App;