import React from 'react'
import styled from 'styled-components'
import Scrollbars from 'react-scrollbars-custom'
import { Motion, spring, presets } from 'react-motion'
import { Component } from 'react';

const Wrapper = styled.div`
    position: absolute;
    top: 80px;
    right: 177px;
    z-index: 1000;
    perspective: 1300px;
    width: 320px;
`

const Dropdown = styled.section.attrs(
    props => ({
        style: {
            opacity: props.opacity,
            transform: `rotateX(${props.rotate}deg)`
        }
    })
)`
    background: ${props => props.theme.background};
    transform-style: preserve-3d;
    transform-origin: 50% 0;
    display: ${props => props.opacity <= 0.1 ? 'none' : 'block'};
    border-radius: 8px;

    div {
        .track{
            background: none !important;
            top: 7px !important;
            height: calc(100% - 14px) !important;

            .thumb {
                background: rgba(0, 0, 0, 0.3) !important;
            }
        }

        .wrapper {
            .content {
                padding: 4px 7px 14px 14px;
            }
        }
    }
`

const Title = styled.h4`
    padding: 20px 20px 6px 20px;
`

const StyledNotification = styled.div.attrs(
    props => ({
        style: {
            transform: `scale(${props.scale})`
        }
    })
)`
    height: 100px;
    width: 100%;
    display: block;
    background: ${props => props.theme.primaryColor};
    border: none;
    border-radius: 5px;
    margin: 10px 0 0px 0;
`

const Notification = props => {
    return (
        <StyledNotification {...props}>

        </StyledNotification>
    )
}


const NotificationDropdown = ({ opened, notifications }) => {
    return (
        <Motion style={{ opacity: spring(opened ? 1 : 0, presets.stiff), rotate: spring(opened ? 0 : -90, { damping: 15, stiffness: 200 }), scale: spring(opened ? 1 : 0, presets.stiff) }}>
            {
                style =>
                    <Wrapper>
                        <Dropdown opacity={style.opacity} rotate={style.rotate}>
                            <Title>Notifications</Title>
                            <Scrollbars style={{ width: '313px', height: notifications.length <= 3 ? (110 * notifications.length + 18) : 350 }} >
                                {notifications.map((notification, i) => <Notification key={i} scale={style.scale} />)}
                            </Scrollbars>
                        </Dropdown>
                    </Wrapper>
            }
        </Motion>
    )
}

export default NotificationDropdown