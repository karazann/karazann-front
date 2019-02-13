import React from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

const Wrapper = styled.div`
    position: absolute;
    top: 80px;
    right: 20px;
    z-index: 1000;
    perspective: 1000px;
    height: auto;
    width: 180px;
`

const Dropdown = styled.section.attrs(
    props => ({
        style: {
            opacity: props.opacity,
            transform: `rotateX(${props.rotate}deg)`
        }
    })
)`
    
    transform-style: preserve-3d;
    transform-origin: 50% 0;
    border-radius: 8px;
    display: ${props => props.opacity <= 0.1 ? 'none' : 'block'};
	background: ${props => props.theme.background};
	padding: 8px;
`

const List = styled.ul`
    list-style: none;
`

const Button = styled.button`
    color: ${props => props.theme.secondaryTextColor};
    border: none;
    background: transparent;
    font-size: 14px;
    line-height: 45px;
    height: 45px;
    padding: 0 20px;
    cursor: pointer;
    font-weight: 500;
    text-align: left;
`

export const DropdownItem = ({ onClick, children }) => {
    return (
        <li>
            <Button onClick={onClick}>
                {children}
            </Button>
        </li>
    )
}

export const ProfileDropdown = ({ opened, children }) => {
    return (
        <Motion style={{ opacity: spring(opened ? 1 : 0, presets.stiff), rotate: spring(opened ? 0 : -90, { damping: 15, stiffness: 200 }) }}>
            {
                style =>
                    <Wrapper>
                        <Dropdown opacity={style.opacity} rotate={style.rotate}>
                            <List>
                                {children}
                            </List>
                        </Dropdown>
                    </Wrapper>
            }
        </Motion>
    )
}