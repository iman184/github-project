import React from 'react'
import PropTypes from 'prop-types';
import '../css/Profile.css'
const RepoItem = ({ repo }) => {
    return (
        <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
              <a href={repo.html_url}>{repo.name}</a>
        </div>
              </div>
              <br />
            
        </div>
    )
}

RepoItem.propTypes={
    repo:PropTypes.object.isRequired
} 
export default RepoItem