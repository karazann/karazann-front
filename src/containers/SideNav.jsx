import { connect } from 'react-redux'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Motion, spring, presets } from "react-motion"
import { withBreakpoints } from 'react-breakpoints'
import { CLOSE_ALL } from '../constants/action-types'

import projects from '../assets/images/folder.svg'
import discover from '../assets/images/discover.svg'

const StyledMobileNav = styled.nav.attrs(props => ({ style: { left: props.left } }))`
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 363px;
    height: 100%;
    padding: 100px 27px 27px 127px;
    background: ${props => props.theme.primaryColor};
`

const StyledDesktopNav = styled.nav`
    padding: 28px 27px;
    flex: 0 0 263px;
`

const List = styled.ul``;

const ListItem = styled.li`
    padding: 15px 0;
`

const Link = styled(NavLink)`
    color: ${props => props.theme.secondaryTextColor};
    display: flex;
    justify-content: start;
    font-weight: 400;

    img {
        height: 25px;
        width: 25px;
    }

    p {
        margin-left: 30px;
        font-weight: 400;
        line-height: 25px;
    }
`

const MoblieNav = ({ opened }) => {
    return (
        <Motion style={{ left: spring(opened ? -100 : -400, presets.gentle) }}>
            {style => <StyledMobileNav left={style.left} >
                <List>
                    <ListItem>
                        <Link activeStyle={{ color: '#4285F4' }} exact to="/">
                            <img src={discover} />
                            <p>Discover</p>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link activeStyle={{ color: '#4285F4' }} exact to="/projects">
                            <img src={projects} />
                            <p>Projects</p>
                        </Link>
                    </ListItem>
                </List>
            </StyledMobileNav>}
        </Motion>
    )
}

const DesktopNav = () => {
    return (
        <StyledDesktopNav>
            <List>
                <ListItem>
                    <Link activeStyle={{ color: '#4285F4' }} exact to="/">
                        <img src={discover} />
                        <p>Discover</p>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link activeStyle={{ color: '#4285F4' }} exact to="/projects">
                        <img src={projects} />
                        <p>Projects</p>
                    </Link>
                </ListItem>
            </List>
        </StyledDesktopNav>
    )
}

const SideNav = ({ opened, dispatch, breakpoints, currentBreakpoint }) => {
    //dispatch({ type: CLOSE_ALL })
    return (
        <Fragment>
            {
                breakpoints[currentBreakpoint] > breakpoints.desktop
                    ? <DesktopNav />
                    : <MoblieNav opened={opened} />
            }
        </Fragment>
    )
}

export default withBreakpoints(SideNav)


