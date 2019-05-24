
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Motion, spring, presets } from "react-motion"
import { withBreakpoints } from 'react-breakpoints'
import { CLOSE_ALL } from '../store/constants/action-types'

const StyledMobileNav = styled.nav.attrs(props => ({ style: { left: props.left } }))`
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 363px;
    height: 100%;
    padding: 100px 27px 27px 127px;
    background: ${props => props.theme.background};
`

const StyledDesktopNav = styled.nav`
    flex: 0 0 263px;
    padding: 28px 27px;
    background: ${props => props.theme.background};
`

const List = styled.ul``;

const ListItem = styled.li`
    padding: 5px 0;
`

const Link = styled(NavLink)`
    color: ${props => props.theme.secondaryTextColor};
    display: flex;
    justify-content: start;
    font-weight: 400;
    border-radius: 8px;
    height: 45px;
    padding: 6px;

    &.active {
        background:${props => props.theme.blue};

        div {
            background: ${props => props.theme.darkBlue};

            svg {
                path, rect {
                    fill: white;
                }
            }
        }

        p {
            color: white;
        }
    }

    div {
        background: ${props => props.theme.secondaryColor};
        
        height: 33px;
        width: 33px;
        border-radius: 5px;
        display: flex;

        svg {
            margin: auto auto;
            height: 18px;
            width: 18px;

            path, rect {
                fill: ${props => props.theme.secondaryTextColor};
            }
        }
    }

    p {
        color: ${props => props.theme.secondaryTextColor};
        margin-left: 30px;
        font-weight: 400;
        font-size: 15px;
        line-height: 33px;
    }
`


const Menu = () => {
    return (
        <List>
            <ListItem>
                <Link exact to="/">
                    <div>
                        <svg viewBox="0 0 512 512">
                            <path d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z" />
                        </svg>
                    </div>
                    <p>Home</p>
                </Link>
            </ListItem>
            <ListItem>
                <Link exact to="/creators">
                    <div>
                        <svg viewBox="0 0 512 512">
                            <path d="M42.66,0H186.24A42.66,42.66,0,0,1,228.9,42.66V214.42a14.48,14.48,0,0,1-14.48,14.48H42.66A42.66,42.66,0,0,1,0,186.24V42.66A42.66,42.66,0,0,1,42.66,0Z" />
                            <path d="M325.93,0H497.68a14.48,14.48,0,0,1,14.48,14.48V186.24A42.66,42.66,0,0,1,469.5,228.9H325.93a42.66,42.66,0,0,1-42.66-42.66V42.66A42.66,42.66,0,0,1,325.93,0Z" transform="translate(795.42 228.9) rotate(-180)" />
                            <path d="M42.66,283.1H214.42a14.48,14.48,0,0,1,14.48,14.48V469.34A42.66,42.66,0,0,1,186.24,512H42.66A42.66,42.66,0,0,1,0,469.34V325.76A42.66,42.66,0,0,1,42.66,283.1Z" />
                            <path d="M325.93,283.1H469.5a42.66,42.66,0,0,1,42.66,42.66V497.52A14.48,14.48,0,0,1,497.68,512H325.93a42.66,42.66,0,0,1-42.66-42.66V325.76a42.66,42.66,0,0,1,42.66-42.66Z" transform="translate(795.42 795.1) rotate(180)" />
                        </svg>
                    </div>
                    <p>Creators</p>
                </Link>
            </ListItem>
            <ListItem>
                <Link exact to="/teams">
                    <div>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="layer-group" className="svg-inline--fa fa-layer-group fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"></path></svg>
                    </div>
                    <p>Groups</p>
                </Link>
            </ListItem>
            <ListItem>
                <Link exact to="/projects">
                    <div>
                        <svg viewBox="0 0 512 512">
                            <path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path>
                        </svg>
                    </div>
                    <p>Projects</p>
                </Link>
            </ListItem>
            <ListItem>
                <Link exact to="/jobs">
                    <div>
                        <svg viewBox="0 0 512 512">
                            <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                        </svg>
                    </div>
                    <p>Jobs</p>
                </Link>
            </ListItem>
        </List>
    )
}

const MoblieNav = ({ opened }) => {
    return (
        <Motion style={{ left: spring(opened ? -100 : -400, presets.gentle) }}>
            {style => <StyledMobileNav left={style.left} >
                <Menu />
            </StyledMobileNav>}
        </Motion>
    )
}

const DesktopNav = () => {
    return (
        <StyledDesktopNav>
            <Menu />
        </StyledDesktopNav>
    )
}

const SideNav = ({ opened, dispatch, breakpoints, currentBreakpoint }) => {
    //dispatch({ type: CLOSE_ALL })
    return (
        breakpoints[currentBreakpoint] > breakpoints.desktop
            ? <DesktopNav />
            : <MoblieNav opened={opened} />
    )
}

export default withBreakpoints(SideNav)


