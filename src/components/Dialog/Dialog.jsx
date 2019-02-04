import React from 'react'
import { Motion, spring, presets } from 'react-motion'
import styled from 'styled-components'

const StyledDialog = styled.section.attrs(
    props => ({
        style: {
            opacity: props.opacity,
            transform: `scale(${props.scale})`,
            top: window.innerHeight / 2 - 200,
            left: window.innerWidth / 2 - 400
        },
    })
)`
    display: ${props => props.opacity >= 0.1 ? 'flex' : 'none'};
    position: absolute;
    z-index: 1000;
    background: ${props => props.theme.primaryColor};
    height: 400px;
    width: 800px;
    border-radius: 5px;
    flex-direction: column-reverse;
`

const Footer = styled.footer`
    height: 60px;
`

const Button = styled.button`
    background: none;
    line-height: 60px;
    cursor: pointer;
    font-weight: 500;
    margin: 0 15px;
    border: none;
    color: ${props => props.theme.blue};
`

const Dialog = ({ opened, onCancel, children }) => {
    return (
        <Motion style={{ opacity: spring(opened ? 1 : 0, presets.stiff), scale: spring(opened ? 1 : .6, presets.wobbly) }}>
            {
                style =>
                    <StyledDialog opacity={style.opacity} scale={style.scale}>
                        <article>
                            {children}
                        </article>
                        <Footer>
                            <Button onClick={onCancel}>Cancel</Button>
                        </Footer>
                    </StyledDialog>
            }
        </Motion>
    )
}

export default Dialog