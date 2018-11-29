import React, { Fragment } from 'react'
import { connect, } from 'react-redux'
import SearchBar from '../SearchBar'
import { NavLink, withRouter } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import profile from '../../assets/images/profile2.jpg'

import './Header.scss'
import logo from '../../assets/images/logo-white.svg'

const Hamburger = ({ onClick }) => {
    return (
        <div className='hamburger-nav d-sm-none'>
            <button onClick={onClick} className='hamburger hamburger--elastic' type='button'>
                <span className='hamburger-box'>
                    <span className='hamburger-inner'>
                    </span>
                </span>
            </button>
        </div>
    )
}

const MobileNav = ({ open, toggle }) => {

    const classList = open ? 'mobile-popup d-sm-none bounce-in' : 'mobile-popup d-sm-none hidden'

    return (<Fragment>
        <Hamburger onClick={toggle} />
        <nav className={classList}>
            <NavLink to='/test'>Hello</NavLink>
        </nav>
    </Fragment>)
}

const Profile = ({ image, name, logout }) => {
    return (
        <div className='profile'>
            <NavLink to='/account'>{name}</NavLink>
            <img src={image} alt="" />
            <a onClick={logout}>x</a>
        </div>
    )
}

const DesktopNav = ({ loggedIn, logout }) => {
    return (
        <nav className='navbar-desktop d-sm-flex'>
            {loggedIn ?
                <Profile name='Roland' image={profile} logout={logout} /> :
                <NavLink className='btn' to='/auth/login'>Login</NavLink>}
        </nav>
    )
}


const Header = ({ dispatch, loggedIn, mobileNavOpen, search }) => {

    const toggleMobileNav = e => {
        dispatch({ type: 'TOGGLE_MOBILE_NAV' })
        e.currentTarget.classList.toggle('is-active')
    }

    const logoutClick = e => {
        dispatch(logout())
    }

    return (
        <Fragment>
            <header className='nav'>
                <div className='container'>
                    <div className='box'>

                        <div className='brand'>
                            <NavLink to='/'>
                                <img src={logo} alt="karazann-logo" />
                                <h1>Karazann.</h1>
                            </NavLink>
                        </div>

                        <SearchBar active={search} />

                        <MobileNav toggle={toggleMobileNav} open={mobileNavOpen} />

                        <DesktopNav loggedIn={loggedIn} logout={logoutClick} />

                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default connect()(Header)