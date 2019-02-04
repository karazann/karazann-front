import React, { Fragment } from 'react'
import styled from 'styled-components'

const statusColor = (theme, status) => {
    switch (status) {
        case 'online':
            return theme.green
        case 'offline':
            return theme.blue
        default:
            return theme.grey
    }
}

const StyledAvatar = styled.div`
    justify-content: flex-end;
    display: flex;
    position: relative;
`

const Icon = styled.img`
    border-radius: 50%;
    height: 38px;
    width: 38px;
    margin-right: 15px;
`

const Status = styled.span`
    border-radius: 50%;
    background: ${props => statusColor(props.theme, props.status)};
    box-shadow: 0 0 0 2px ${props => props.theme.primaryColor};
    position: absolute;
    top: 29px;
    font-family: 'Roboto';
    left: 29px;
    height: 9px;
    width: 9px;
`

const Paragraph = styled.p`
    color: ${props => props.theme.secondaryTextColor};
    line-height: 38px;
    font-size: 14px;
    font-weight: 500;
    margin-right: 15px;
`

const Avatar = ({image, name, status}) => {
    return (
        <StyledAvatar>
            <Icon src={image} />
            {status && <Status status={status} ></Status>}
            {name && <Paragraph>{name}</Paragraph>}
        </StyledAvatar>
    )
}

export default Avatar