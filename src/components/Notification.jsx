import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledNotification = styled.button`
    border: none;
    cursor: pointer;
    height: 24px;
    width: 24px;
    background: ${props => props.active ? props.theme.blue : props.theme.secondaryColor};
    border-top-left-radius: 50%;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    text-align: center;
    display: flex;
    margin: 7px;
    margin-right: 25px;
`

const Counter = styled.p`
    font-size: 13px;
    color: ${props => props.active ? '#FFFFFF' :  props.theme.secondaryTextColor };
    padding-left: ${props => props.over ? 0 : 1}px;
    margin: auto auto;
    font-weight: 700;
`

const Notification = ({ count, onClick }) => {
    const zero = count == 0
    const over = count >= 10
    return (
        <StyledNotification onClick={onClick} active={!zero}>
            <Counter active={!zero} over={over}>{(over ? '9+' : count)}</Counter>
        </StyledNotification>

    )
}

export default Notification