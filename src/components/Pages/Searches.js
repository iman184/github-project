import React, {Fragment} from 'react'
import Search from '../../components/users/Search'
import Users from '../../components/users/Users'
import '../css/Navbar.css';
const Home = () =>  (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )

export default Home;