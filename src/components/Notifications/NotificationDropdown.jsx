import React from 'react'
import Scrollbars from 'react-scrollbars-custom'
import { 
    Motion, 
    spring, 
    presets 
} from 'react-motion'

import {
    Wrapper,
    DropdownSection,
    Title,
    Notification
} from './style'

const NotificationDropdown = ({ opened, notifications }) => {
    return (
        <Motion style={{ opacity: spring(opened ? 1 : 0, presets.stiff), rotate: spring(opened ? 0 : -90, { damping: 15, stiffness: 200 }), scale: spring(opened ? 1 : 0, presets.stiff) }}>
            {
                style =>
                    <Wrapper>
                        <DropdownSection opacity={style.opacity} rotate={style.rotate}>
                            <Title>Notifications</Title>
                            <Scrollbars style={{ width: '313px', height: notifications.length <= 3 ? (110 * notifications.length + 18) : 350 }} >
                                {notifications.map((notification, i) => <Notification key={i} scale={style.scale} />)}
                            </Scrollbars>
                        </DropdownSection>
                    </Wrapper>
            }
        </Motion>
    )
}

export default NotificationDropdown