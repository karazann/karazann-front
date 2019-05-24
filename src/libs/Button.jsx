import React from 'react'
import styled, { keyframes } from 'styled-components'

function pulse(color) {
    const animation = keyframes`
    0% {
        
    }
    50% {
        box-shadow: 0 0 0 10px rgba(${color}, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(${color}, 0);
    }
    `
    return animation;
}

const StyledButton = styled.button`
    border: none;
    font-weight: 500;
    height: 38px;
    border-radius: 5px;
    cursor: pointer;
    line-height: 38px;
    padding: 0 15px;
    transition: 0.3s;

    background: ${props => props.theme[props.color]};
	box-shadow: 0 0 0 0 rgba(${props => props.theme[props.color]}, 0.7);
    color: white;

    i {
        line-height: 38px;
        padding: 0 7px 0 0;
    }

    animation: ${props => pulse(props.theme[props.color])} 2s infinite;
`

const Button = props => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

export default Button