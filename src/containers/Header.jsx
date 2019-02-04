import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Profile from '../components/Profile'
import {
    ProfileDropdown,
    DropdownItem
} from '../components/ProfileDropdown'

import logo from '../assets/images/logo2.svg'
import avatar from '../assets/images/avatar.jpg'
import { TOGGLE_THEME, OPEN_AVATAR_DROPDOWN, OPEN_NEW_DIALOG, OPEN_PUSH_NAV } from '../constants/action-types';

const StyledHeader = styled.header`
    grid-column: 2;
	grid-row: 1;

    display: grid;
    grid-template-columns: 230px 1fr;
    grid-template-rows: 1fr;

    padding: 17px;
`

const VisualHeader = styled.div`
    grid-column: 1 / span 3;
    width: 110%;
    grid-row: 1;
    background: ${props => props.theme.primaryColor};
`

const Brand = styled(Link)`
    display: flex;
    height: 100%;
    z-index: 1100;
    display: absolute;

    img {
        height: 38px;
        width: 38px;
        margin: 0 10px;
    }

    h3 {
        color: ${props => props.theme.primaryTextColor};
        font-family: "Pouttu";
        line-height: 38px;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1.5px;
    }
`

const NewButton = styled(Button)`
    margin-right: 40px;
`

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 38px;
`

const NavRight = styled.section`
    display: flex;
`

const NavLeft = styled.section`
    display: flex;
`

const Header = ({ push, openPush, openNew, openDropdown, toggleTheme, opened, dark }) => {
    return (
        <Fragment>
            <VisualHeader />
            <StyledHeader>
                <Brand inPushState={push} onClick={openPush} to='/'>
                    <img src={logo} alt="" />
                    <h3>Karazann</h3>
                </Brand>
                <Navigation>
                    <NavLeft>
                    </NavLeft>
                    <NavRight>
                        <NewButton pulse color='purple' onClick={openNew} ><i className="fas fa-plus"></i> Create</NewButton>
                        <Profile user={{ avatar, name: 'Jordan', status: 'online' }} onClick={openDropdown} opened={opened} />
                        <ProfileDropdown opened={opened} >
                            <DropdownItem onClick={toggleTheme} >{dark ? 'Light theme' : 'Dark theme'}</DropdownItem>
                            <DropdownItem onClick={() => { }} >Settings</DropdownItem>
                        </ProfileDropdown>
                    </NavRight>
                </Navigation>
            </StyledHeader>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        push: state.ui.pushNavOpened,
        opened: state.ui.avatarDropdownOpened,
        dark: state.ui.darkTheme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTheme: () => { dispatch({ type: TOGGLE_THEME }) },
        openPush: () => { dispatch({ type: OPEN_PUSH_NAV }) },
        openNew: () => { dispatch({ type: OPEN_NEW_DIALOG }) },
        openDropdown: () => { dispatch({ type: OPEN_AVATAR_DROPDOWN }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)