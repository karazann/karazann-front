import React, { Fragment } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import styled, { css } from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

const HamburgerButton = styled.button`
    height: 38px;
    width: 38px;
    background: transparent;
    border: none;
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
        <Fragment>
            {
                props.breakpoints[props.currentBreakpoint] <= props.breakpoints.desktop
                    ?
                    <HamburgerButton {...props} type='button'>
                        <Lines active={props.opened} />
                    </HamburgerButton>
                    :
                    null
            }
        </Fragment>
    )
}

export default withBreakpoints(Hamburger)