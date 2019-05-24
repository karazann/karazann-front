import React from 'react'
import { connect } from 'react-redux'

import { 
    NotificationDropdown, 
    NotificationMenu, 
    ProfileDropdown, 
    ProfileDropdownItem, 
    ProfileMenu 
} from '@components'
import { 
    TOGGLE_THEME, 
    OPEN_AVATAR, 
    CLOSE_ALL, 
    OPEN_NOTIFICATIONS, 
} from '@store/constants'
import { logout } from '@store/actions'

import avatar from '@images/avatar2.jpg'
import logo from '@images/logo.svg'

import { Container, ListItem, HorizontalList, Brand } from '@libs/style'
import { Header, HeaderInner, HeaderDesktop, HeaderLink } from './style'

const HeaderNotLogged = () => {
    return (
        <HeaderDesktop>
            <HorizontalList>
                <ListItem>
                    <HeaderLink to="/developers">Developers</HeaderLink>
                </ListItem>
                <ListItem>
                    <HeaderLink to="/blog">Blog</HeaderLink>
                </ListItem>
                <ListItem>
                    <HeaderLink to="/faq">FAQ</HeaderLink>
                </ListItem>
                <ListItem>
                    <HeaderLink to="/roadmap">Roadmap</HeaderLink>
                </ListItem>
                <ListItem>
                    <HeaderLink to="/signin">Sign in</HeaderLink>
                </ListItem>
                <ListItem>
                    <HeaderLink button to="/signup">Sign up</HeaderLink>
                </ListItem>
            </HorizontalList>
        </HeaderDesktop>
    )
}

const HeaderLogged = props => {
    const { 
        openNotifications, 
        notificationsOpened, 
        openAvatar, 
        avatarOpened, 
        toggleTheme, 
        dark, 
        logout
    } = props

    return (
        <>
            <HeaderDesktop>
                <HorizontalList>
                    <ListItem>
                        <HeaderLink to="/creators">Creators</HeaderLink>
                        <HeaderLink to="/projects">Projects</HeaderLink>
                        <HeaderLink to="/jobs">Jobs</HeaderLink>
                    </ListItem>
                </HorizontalList>
            </HeaderDesktop>
            <HeaderDesktop>
                <HorizontalList>
                    <ListItem>
                        <NotificationMenu count={3} onClick={openNotifications} />
                        <NotificationDropdown opened={notificationsOpened} notifications={[{}, {}, {}]} />
                    </ListItem>
                    <ListItem>
                        <ProfileMenu user={{ name: 'Roland', status: 'online', avatar }} onClick={openAvatar} opened={avatarOpened} />
                        <ProfileDropdown opened={avatarOpened} >
                            <ProfileDropdownItem onClick={toggleTheme} >{dark ? 'Light theme' : 'Dark theme'}</ProfileDropdownItem>
                            <ProfileDropdownItem>Settings</ProfileDropdownItem>
                            <ProfileDropdownItem onClick={logout} >Logout</ProfileDropdownItem>
                        </ProfileDropdown>
                    </ListItem>
                </HorizontalList>
            </HeaderDesktop>
        </>
    )
}

const HeaderComponent = props => {
    if (props.hidden)
        return null

    return (
        <Header>
            <Container>
                <HeaderInner>
                    <Brand to='/'>
                        {/*<StyledHamburger opened={sideNavOpened} onClick={() => { sideNavOpened ? closeAll() : openPush() }} />*/}
                        <img src={logo} alt="karazann" />
                        <p>Karazann</p>
                    </Brand>
                    {/*<SearchBar>
                        <input placeholder='Search...' type="text" name="" id="" />
                        <img src={search} />
                    </SearchBar>*/}
                    {props.loggedIn ? <HeaderLogged {...props} /> : <HeaderNotLogged />}
                </HeaderInner>
            </Container>
        </Header>
    )
}

const mapStateToProps = state => {
    return {
        avatarOpened: state.ui.avatarOpened,
        notificationsOpened: state.ui.notificationsOpened,
        dark: state.ui.darkTheme,
        loggedIn: state.user.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openNotifications: () => dispatch({ type: OPEN_NOTIFICATIONS }),
        toggleTheme: () => dispatch({ type: TOGGLE_THEME }),
        closeAll: () => dispatch({ type: CLOSE_ALL }),
        openAvatar: () => dispatch({ type: OPEN_AVATAR }),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)