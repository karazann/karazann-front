import React from 'react'
import { Motion, spring, presets } from 'react-motion'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    display: flex;
`

const StyledDialog = styled.section.attrs(
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

const Content = styled.div`
    flex: 1;
`

const Footer = styled.footer`
    flex: 0 0 60px;
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
                    <Wrapper>
                        <StyledDialog opacity={style.opacity} scale={style.scale}>
                            <Content>
                                {children}
                            </Content>
                            <Footer>
                                <Button onClick={onCancel}>Cancel</Button>
                            </Footer>
                        </StyledDialog>
                    </Wrapper>
            }
        </Motion>
    )
}

export default Dialog