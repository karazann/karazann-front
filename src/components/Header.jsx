import React, { Fragment, Component, } from 'react'
import { connect, } from 'react-redux'
import SearchBar from './SearchBar'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import { logout } from '../actions/userActions';

const Header = ({ dispatch, loggedIn }) => {
    return (
        <Fragment>
            <div className='alert hidden'>Whoops</div>
            <header className='navbar'>
                <div className='container'>
                    <div className='box'>
                        <div className='brand'>
                            <NavLink to='/'>
                                <img src="./logo-white.svg" alt="" />
                                <h1>Karazann.</h1>
                            </NavLink>
                        </div>

                        <Route exact path="/" component={SearchBar}></Route>

                        <nav>
                            {loggedIn ? <a className="btn" onClick={e => dispatch(logout())}>Logout</a> : <NavLink className="btn" to='/auth/login'>Login</NavLink>}
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default withRouter(connect(mapStateToProps)(Header))