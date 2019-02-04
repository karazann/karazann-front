import React from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

const Dropdown = styled.section.attrs(
    props => ({
        style: {
            opacity: props.opacity,
            transform: `translateY(${props.translate}px)`
        }
    })
)`
    display: ${props => props.opacity <= 0.1 ? 'none' : 'block'};
	background: ${props => props.theme.primaryColor};
    position: absolute;
	top: 70px;
	right:  0px;
	z-index: 1000;
	height: auto;
	border-radius: 5px;
	width: 200px;
	padding: 10px;
`

const List = styled.ul`
    list-style: none;
`

const Button = styled.button`
    color: ${props => props.theme.secondaryTextColor};
    border: none;
    background: transparent;
    font-size: 14px;
    line-height: 50px;
    height: 50px;
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
        <Motion defaultStyle={{ opacity: 0, translate: 0 }}
            style={{ opacity: spring(opened ? 1 : 0, presets.wobbly), translate: spring(opened ? 0 : -30, presets.wobbly) }}>
            {
                style =>
                    <Dropdown opacity={style.opacity} translate={style.translate}>
                        <List>
                            {children}
                        </List>
                    </Dropdown>
            }
        </Motion>
    )
}