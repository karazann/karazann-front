import React, { Component } from 'react'
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

class NotificationDropdown extends Component {

    Scrollbars = ({children}) => <div style={{padding: '4px 7px 14px 14px'}}>Loading</div>
    loaded = false;

    async componentWillReceiveProps(nextProps) {
        if (nextProps.opened && !this.loaded) {
            console.log('load scrollbars')
            const module = await import(/* webpackPrefetch: true, webpackChunkName: "ReactScrollbars" */ 'react-scrollbars-custom');
            this.Scrollbars = module.default;
            this.loaded = true;
            this.forceUpdate();
        }
    }

    render() {
        const { opened, notifications } = this.props
        return (
            <Motion style={{ opacity: spring(opened ? 1 : 0, presets.stiff), rotate: spring(opened ? 0 : -90, { damping: 15, stiffness: 200 }), scale: spring(opened ? 1 : 0, presets.stiff) }}>
                {
                    style =>
                        <Wrapper>
                            <DropdownSection opacity={style.opacity} rotate={style.rotate}>
                                <Title>Notifications</Title>
                                <this.Scrollbars style={{ width: '313px', height: notifications.length <= 3 ? (110 * notifications.length + 18) : 350 }} >
                                    {notifications.map((notification, i) => <Notification key={i} scale={style.scale} />)}
                                </this.Scrollbars>
                            </DropdownSection>
                        </Wrapper>
                }
            </Motion>
        )
    }
}

export default NotificationDropdown