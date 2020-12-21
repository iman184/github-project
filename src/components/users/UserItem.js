import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const UserItem = ({user:{login, avatar_url,html_url}}) => {
    return (
      
      <div className="card" style={{width: '18rem'}}>
      <img src={avatar_url} className="card-img-top" alt=" " />
   
        <h5 className="card-title">{login}</h5>
      
        <Link to={`/user/${login}`} className="btn btn-primary">More</Link>
      </div>
    

     
    )
}
UserItem.propTypes = {
  user:PropTypes.object.isRequired
}

export default UserItem
