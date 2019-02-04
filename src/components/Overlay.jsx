import React from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

const StyledOverlay = styled.div.attrs(
    props => ({ style: { opacity: props.opacity } })
)`
    display: ${props => props.opacity <= 0.1 ? 'none' : 'block'};
    position: fixed;
    z-index: 999;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    cursor: pointer;
    background: rgba(0,0,0,0.2);
`

export const Overlay = props => {
    return (
        <Motion style={{ opacity: spring(props.active ? 1 : 0, presets.wobbly) }}>
            {
                style =>
                    <StyledOverlay opacity={style.opacity} {...props} />
            }
        </Motion>
    )
}

export default Overlay