import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Media } from 'react-breakpoints'

import Hamburger from '../components/Hamburger'
import Notification from '../components/Notification'
import NotificationDropdown from '../components/NotificationDropdown';
import Profile from '../components/Profile'
import {
    ProfileDropdown,
    DropdownItem
} from '../components/ProfileDropdown'

import logo from '../assets/images/logo2.svg'
import avatar from '../assets/images/avatar.jpg'
import search from '../assets/images/search.svg'

import { TOGGLE_THEME, OPEN_AVATAR, OPEN_NEW, OPEN_PUSH_NAV, CLOSE_ALL, OPEN_NOTIFICATIONS } from '../constants/action-types';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.primaryColor};
`

const Navigation = styled.nav`
    flex: 1;
    padding: 17px;  
    display: flex;
    justify-content: space-between;
    position: relative;
`

const Brand = styled(Link)`
    display: flex;
    height: 100%;
    display: absolute;
    
    img {
        z-index: 1100;
        height: 38px;
        width: 38px;
        margin: 0 10px;
    }
    
    h3 {
        z-index: 1100;
        color: ${props => props.theme.primaryTextColor};
        font-family: "Pouttu";
        line-height: 38px;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1.5px;
    }
`

const NavRight = styled.section`
    display: flex;
`

const NavCenter = styled.section`
    display: flex;
`

const SearchBar = styled.div`

    img {
        position: absolute;
        margin: 11.5px;
        height: 15px;
        width: 15px;
        color: ${props => props.theme.secondaryTextColor};
    }

    input {
        position: absolute;
        height: 38px;
        width: 100%;
        border: none;
        font-size: 14px;
        padding: 0px 15px 0px 40px;
        font-weight: 500;
        font-family: inherit;
        border-radius: 10px; 
        background: ${props => props.theme.background};
        color: ${props => props.theme.secondaryTextColor};
    }

    position: relative;
    height: 100%; 

    width: 300px; 
`

const Header = ({ closeAll, openPush, toggleTheme, avatarOpened, openAvatar, notificationsOpened, openNotifications, sideNavOpened, dark }) => {
    return (
        <StyledHeader>
            <Navigation>
                <Media>
                    {
                        ({ breakpoints, currentBreakpoint }) => {
                            const desktop = breakpoints[currentBreakpoint] > breakpoints.desktop
                            return (
                                <Brand to='/'>
                                    {!desktop && <Hamburger opened={sideNavOpened} onClick={() => { sideNavOpened ? closeAll() : openPush() }} />}
                                    <img src={logo} alt="karazann" />
                                    <h3>Karazann</h3>
                                </Brand>
                            )
                        }
                    }
                </Media>
                <NavCenter>
                    <SearchBar>
                        <input placeholder='Search...' type="text" name="" id="" />
                        <img src={search} />
                    </SearchBar>
                </NavCenter>
                <NavRight>
                    <Notification count={3} onClick={openNotifications} />
                    <NotificationDropdown opened={notificationsOpened} notifications={[{}, {}, {}, {}, {}]} />

                    <Profile user={{ name: 'Timi', status: 'online' }} onClick={openAvatar} opened={avatarOpened} />
                    <ProfileDropdown opened={avatarOpened} >
                        <DropdownItem onClick={toggleTheme} >{dark ? 'Light theme' : 'Dark theme'}</DropdownItem>
                        <DropdownItem onClick={() => { }} >Settings</DropdownItem>
                    </ProfileDropdown>
                </NavRight>
            </Navigation>
        </StyledHeader>
    )
}

//<NewButton pulse color='purple' onClick={openNew} ><i className="fas fa-plus"></i> Create</NewButton>

const mapStateToProps = state => {
    return {
        push: state.ui.pushNavOpened,
        sideNavOpened: state.ui.pushNavOpened,
        avatarOpened: state.ui.avatarOpened,
        notificationsOpened: state.ui.notificationsOpened,
        dark: state.ui.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openNotifications: () => { dispatch({ type: OPEN_NOTIFICATIONS }) },
        toggleTheme: () => { dispatch({ type: TOGGLE_THEME }) },
        closeAll: () => { dispatch({ type: CLOSE_ALL }) },
        openPush: () => { dispatch({ type: OPEN_PUSH_NAV }) },
        openNew: () => { dispatch({ type: OPEN_NEW }) },
        openAvatar: () => { dispatch({ type: OPEN_AVATAR }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)