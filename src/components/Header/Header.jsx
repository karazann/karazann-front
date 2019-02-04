import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../../assets/images/logo2.svg'
import search from '../../assets/images/search.svg'
import avatar from '../../assets/images/avatar.jpg'

import Button from '../Button'

import { TOGGLE_AVATAR_DROPDOWN, TOGGLE_THEME } from '../../constants/action-types';

import './Header.scss'
import Profile from '../Profile'
import { ProfileDropdown, DropdownItem } from '../ProfileDropdown'

export const Header = ({ toggleDropdown, toggleTheme, opened, dark }) => {
    return (
        <Fragment>
            <div></div>
            <nav>
                <div className="brand">
                    <Link to="/">
                        <img src={logo} alt="karazann" />
                        <h3>Karazann</h3>
                    </Link>
                </div>
                <section className="navbar">
                    <div className="search">
                        <div className="bar">
                            <input type="text" placeholder="Search Project" className="input" />
                            <img src={search} />
                        </div>
                        {/*<div className="dropdown">

                        </div>
                        <div className='overlay'>

    </div>*/}
                    </div>

                    <div className="nav-right">
                        <Button color='blue' ><i className="fas fa-plus"></i> Create</Button>
                        <Profile user={{ avatar, name: 'Jordan', status: 'offline' }} onClick={toggleDropdown} opened={opened}  />
                        <ProfileDropdown opened={opened} >
                            <DropdownItem onClick={toggleTheme} >{dark ? 'Light theme' : 'Dark theme'}</DropdownItem>
                            <DropdownItem onClick='/user/settings' >Settings</DropdownItem>
                        </ProfileDropdown>
                    </div>
                </section>
            </nav>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        opened: state.ui.avatarDropdownOpened,
        dark: state.ui.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTheme: () => { dispatch({ type: TOGGLE_THEME }) },
        toggleDropdown: () => { dispatch({ type: TOGGLE_AVATAR_DROPDOWN }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)