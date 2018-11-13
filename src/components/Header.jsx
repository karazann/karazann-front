import React, { Fragment } from 'react'
import SearchBar from './SearchBar'
import { NavLink, Route } from 'react-router-dom'

const Header = props => {
    return (
        <Fragment>
            {<div className="alert hidden">Whoops</div>}
            <nav className='navbar'>
                <div className='container'>

                    <div className='brand float-left'>
                        <NavLink to='/'>
                            <img src="./logo-white.svg" alt="" />
                            <h1>Karazann.</h1>
                        </NavLink>
                    </div>

                    <Route exact path="/" component={SearchBar}></Route>

                    <div className="menu  float-right">
                        <NavLink className="btn" to='/auth/login'>Login</NavLink>
                    </div>

                </div>
            </nav>
        </Fragment>
    )

}

export default Header