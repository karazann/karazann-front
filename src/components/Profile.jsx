import { Motion, spring, presets } from 'react-motion'
import styled from 'styled-components'
import Avatar from './Avatar'
import React from 'react'

const Button = styled.button`
    display: flex;
    border: none;
    background: transparent;
    cursor: pointer;
`

const Arrow = styled.span.attrs(
    props => ({style: { transform: `rotate(${props.rotation}deg)` }})
)`
    color: ${props => props.theme.secondaryTextColor};
    line-height: 38px;
    font-size: 15px;
`

const Profile = props => {
    var { user } = props

    return (
        <Button {...props}>
            <Avatar image={user.avatar} name={user.name} status={user.status} />
            <Motion style={{ rotation: spring(props.opened ? 180 : 0, presets.stiff) }}>
                {
                    style =>
                        <Arrow rotation={style.rotation} >
                            <i className='fas fa-angle-down'></i>
                        </Arrow>
                }
            </Motion>
        </Button>
    )
}

export default Profile