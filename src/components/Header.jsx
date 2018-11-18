import React, { Fragment, Component, } from 'react'
import { connect, } from 'react-redux'
import SearchBar from './SearchBar'
import { NavLink, withRouter } from 'react-router-dom'
import { logout } from '../actions/userActions'

const MobileNav = ({ active }) => {
    if (!active)
        return null

    return <nav className="navbar-mobile d-sm-none"><NavLink to='fdsaf'>Hello</NavLink></nav>
}

const DesktopNav = ({ active, loggedIn, logout}) => {
    if (!active)
        return null

    return (
        <nav className="navbar-desktop d-sm-flex">
            {loggedIn ? <a className="btn" onClick={logout}>Logout</a> : <NavLink className="btn" to='/auth/login'>Login</NavLink>}
        </nav>
    )
}

const Hamburger = ({ active, onClick }) => {
    if (!active)
        return null

    return (
        <div className='hamburger-nav d-sm-none'>
            <button onClick={onClick} className="hamburger hamburger--elastic" type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )
}

const Header = ({ dispatch, loggedIn, isMobileNavActive, isHeaderActive }) => {

    const hamburger = e => {
        dispatch({ type: 'TOGGLE_MOBILE_NAV' })
        e.currentTarget.classList.toggle('is-active')
    }

    const logoutClick = () => {
        dispatch(logout())
    }

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

                        <SearchBar active={isHeaderActive} />

                        <Hamburger active={isHeaderActive} onClick={hamburger}  />

                        <MobileNav active={isMobileNavActive && isHeaderActive} />

                        <DesktopNav active={isHeaderActive} loggedIn={loggedIn} logout={logoutClick}/>

                    </div>
                </div>
            </header>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        isMobileNavActive: state.ui.isMobileNavActive,
        isHeaderActive: state.ui.isHeaderActive
    }
}

export default withRouter(connect(mapStateToProps)(Header))