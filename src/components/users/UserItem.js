import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const UserItem = ({user:{login, avatar_url,html_url}}) => {
    return (
       <div className="containers">
        <div className="row pt-5">
          <div className="col-sm">
            <div className="column">
              <div className="card position-img">
                <div>
                  <img src={avatar_url} style={{width: '130px', height: '130px', paddingTop: '10px', borderRadius: '60px'}} />
                </div>
                <h3 className="bottom">{login}</h3>
                <Link to={`/user/${login}`} className="buttons">More</Link>
              </div>
            </div>
          </div></div></div>
    

     
    )
}
UserItem.propTypes = {
  user:PropTypes.object.isRequired
}

export default UserItem
