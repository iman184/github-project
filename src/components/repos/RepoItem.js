import React from 'react'
import PropTypes from 'prop-types';
import '../css/Profile.css'
const RepoItem = ({ repo }) => {
    
    return (
        <div className="card mb-2">
        <div className="card-body">
              <a className='cars'  href={repo.html_url}>{repo.name}</a>
              </div>
              </div>
    )
}

RepoItem.propTypes={
    repo:PropTypes.object.isRequired
} 
export default RepoItem