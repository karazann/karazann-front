import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

const Navigation = styled.nav.attrs(
    props => ({ style: { left: props.left } })
)`
    position: fixed;
    z-index: 1000;
    width:  320px;
    top: 0;

    height: 100%;
    padding: 27px 27px 27px 127px;
    background: ${props => props.theme.primaryColor};
`

const PushNav = ({ opened, children }) => {
    return (
        <Motion style={{ left: spring(opened ? -100 : -400, presets.gentle) }}>
            {
                style =>
                    <Fragment>
                        <Navigation left={style.left} />
                        
                    </Fragment>

            }
        </Motion>
    )
}

export default PushNav