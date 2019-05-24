import React from 'react'
import { Motion, spring, presets } from 'react-motion'
import { Overlay } from './style'

export const OverlayComponent = props => {
    return (
        <Motion style={{ opacity: spring(props.active ? 1 : 0, presets.stiff) }}>
            { style => <Overlay opacity={style.opacity} {...props} /> }
        </Motion>
    )
}

export default OverlayComponent