import Avatar from './Avatar'
import React from 'react'
import { Motion, spring, presets } from 'react-motion'

import { ProfileMenu, Arrow } from './style'

const ProfileMenuComponent = props => {
    const { user } = props
    return (
        <ProfileMenu {...props}>
            <Avatar image={user.avatar} name={user.name} status={user.status} />
            <Motion style={{ rotation: spring(props.opened ? 180 : 0, presets.stiff) }}>
                {
                    style =>
                        <Arrow rotation={style.rotation} >
                            <i className="fas fa-caret-down"></i>
                        </Arrow>
                }
            </Motion>
        </ProfileMenu>
    )
}

export default ProfileMenuComponent