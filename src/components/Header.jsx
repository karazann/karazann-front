import React from 'react'
import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom'

const Header = props => {
    return (
        <nav className='navbar'>
            <div className='container'>

                <div className='brand float-left'>
                    <NavLink to='/'>
                        <h1>Karazann.</h1>
                    </NavLink>
                </div>

                <SearchBar />
            
                <NavLink className="menu btn float-right" to='/auth/login'>Login</NavLink>

            </div>
        </nav>
    )

}

export default Header