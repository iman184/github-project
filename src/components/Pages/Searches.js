import React , {Fragment} from 'react'
import Search from '../../components/users/Search'
import Users from '../../components/users/Users'
import '../css/Searches.css'
const Searches = () =>  (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )

export default Searches;