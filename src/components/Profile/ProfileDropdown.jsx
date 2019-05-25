import React from 'react'
import { Motion, spring, presets } from 'react-motion'

import { Wrapper, DropdownSection, List } from './style'

const ProfileDropdownComponent = ({ opened, children }) => {
    return (
        <Motion style={{ opacity: spring(opened ? 1 : 0, presets.stiff), rotate: spring(opened ? 0 : -90, { damping: 15, stiffness: 200 }) }}>
            {
                style =>
                    <Wrapper>
                        <DropdownSection opacity={style.opacity} rotate={style.rotate}>
                            <List>
                                {children}
                            </List>
                        </DropdownSection>
                    </Wrapper>
            }
        </Motion>
    )
}

export default ProfileDropdownComponent