import React from 'react'
import styled from 'styled-components'

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

    span {
        left: 8px;
        top: 18px;
        
        &,
        &::before,
        &::after {
            background-color: white;
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

        &::before {
            top: -8px;
        }

        &::after {
            bottom: -8px;
        }
    }
`

//📌 Animate it
//📌 Style it

const Hamburger = props => {
    return (
        <HamburgerButton {...props} type='button'>
            <span >
            </span>
        </HamburgerButton>
    )
}

export default Hamburger