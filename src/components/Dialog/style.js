
import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    display: flex;
`

export const Dialog = styled.section.attrs(
    props => ({
        style: {
            opacity: props.opacity,
            transform: `scale(${props.scale})`,
        },
    })
)`
    margin: auto auto;
    display: ${props => props.opacity >= 0.1 ? 'flex' : 'none'};
    z-index: 1000;
    pointer-events: all;
    background: ${props => props.theme.primaryColor};
    height: 300px;
    width: 500px;
    border-radius: 5px;
    flex-direction: column;
`

export const Content = styled.div`
    flex: 1;
`

export const Footer = styled.footer`
    flex: 0 0 60px;
`

export const Button = styled.button`
    background: none;
    line-height: 60px;
    cursor: pointer;
    font-weight: 500;
    margin: 0 15px;
    border: none;
    color: ${props => props.theme.blue};
`