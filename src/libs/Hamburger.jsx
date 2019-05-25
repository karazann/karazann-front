import React from 'react'
import styled, { css } from 'styled-components'

const HamburgerButton = styled.button`
    height: 38px;
    width: 38px;
    background: transparent;
    border: none;
    z-index: 1100;
    padding: 0;
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin-right: 7px;
`

const Lines = styled.span`
    &,
    &::before,
    &::after {
        background-color: ${props => props.theme.primaryTextColor};
        width: 23px;
        height: 3px;
        border-radius: 2px;
        position: absolute;
    }

    &::before,
    &::after {
        content: "";
        display: block;
    }
    
    & {
        top: 8.5px;
        left: 8px;
        transition-property: transform;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    &::before {
        top: 9px;
        transition: opacity 0.125s 0.275s ease;
    }
    
    &::after {
        top: 18px;
        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    ${props => props.active && css`
        & {
            transform: translate3d(0, 9px, 0) rotate(130deg);
            transition-delay: 0.075s;
        }`
    }

    ${props => props.active && css`
        &::before {
            transition-delay: 0s;
            opacity: 0;
        }`
    }

    ${props => props.active && css`
        &::after {
            transform: translate3d(0, -18px, 0) rotate(-270deg);
            transition-delay: 0.075s;
        }`
    }
`

//📌 Animate it
//📌 Style it

const Hamburger = props => {
    return (
        <HamburgerButton {...props} type='button'>
            <Lines active={props.opened} />
        </HamburgerButton>
    )
}

export default Hamburger