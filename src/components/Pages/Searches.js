import React , {Fragment} from 'react'
import Search from '../../components/users/Search'
import Users from '../../components/users/Users'
import Navbar from '../../components/Pages/Navbar'

import '../css/Searches.css'
const Searches = () =>  (
        <Fragment>
       
            <Navbar />
            <Search />
            <Users />
            
        </Fragment>
    )

export default Searches;