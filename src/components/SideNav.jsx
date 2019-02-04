import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import projects from '../assets/images/folder.svg'
import discover from '../assets/images/discover.svg'

const Navigation = styled.nav`
    padding: 70px 27px;
    flex: 0 0 230px;
    display: ${props => props.perma ? 'block' : 'none'}
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

const SideNav = ({ perma }) => {
    return (
        <Navigation perma={perma}>
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
        </Navigation>
    )
}

export default SideNav