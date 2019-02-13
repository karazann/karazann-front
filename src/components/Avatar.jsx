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
    height: ${props => props.extended ? 60 : 38}px;
    justify-content: flex-end;
    display: flex;
    position: relative;
`

const Icon = styled.img`
    border-radius: 50%;
    height: ${props => props.extended ? 60 : 38}px;
    width: ${props => props.extended ? 60 : 38}px;
    margin-right: 15px;
    background-color: rgba(253, 150, 68, .6);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        margin-left: -1px;
        font-size: 20px;
        font-weight: 600;
        color: white;
    }
`

const IconPlaceholder = styled.div`
    border-radius: 50%;
    height: ${props => props.extended ? 60 : 38}px;
    width: ${props => props.extended ? 60 : 38}px;
    margin-right: 15px;
`

const Status = styled.span`
    border-radius: 50%;
    background: ${props => statusColor(props.theme, props.status)};
    box-shadow: 0 0 0 2px ${props => props.theme.primaryColor};
    position: absolute;

    top: ${props => props.extended ? 48 : 29}px;
    left: ${props => props.extended ? 48 : 29}px;

    font-family: 'Roboto';
    height: 9px;
    width: 9px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Paragraph = styled.p`
    color: ${props => props.extended ? props.theme.primaryTextColor : props.theme.secondaryTextColor};
    line-height: ${props => props.extended ? 25 : 38}px;
    font-size: 14px;
    font-weight: 500;
    margin-right: 15px;
`

const SecondParagraph = styled.p`
    color: ${props => props.theme.secondaryTextColor};
    line-height: ${props => props.extended ? 20 : 38}px;
    font-size: 13px;
    font-weight: 400;
    margin-right: 15px;
`

const Avatar = ({ extended, image, name, status, location }) => {
    return (
        <StyledAvatar extended={extended}>
            {image ? <Icon extended={extended} src={image} /> : <Icon as='div'><p>{name.charAt(0).toUpperCase()}</p></Icon>}
            {status && <Status extended={extended} status={status} ></Status>}
            <Details>
                {name && <Paragraph extended={extended}>{name}</Paragraph>}
                {location && <SecondParagraph extended={extended}>{location}</SecondParagraph>}
            </Details>
        </StyledAvatar>
    )
}

export default Avatar