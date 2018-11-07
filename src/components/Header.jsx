import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import '../scss/style.scss'

const Header = props => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='brand float-left'>
                    <h1>Karazann.</h1>

                </div>
                <SearchBar />
                <NavLink className="btn float-right" to='/login'>Login</NavLink>
            </div>
        </nav>
    )

}

export default Header