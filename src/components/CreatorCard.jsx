import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

import avatar from '../assets/images/avatar.jpg'

const Card = styled.article`
    width: 100%;
    border-radius: 8px;
    background: ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
`

const Section = styled.section`
    width: 100%;
    margin: 20px 0 0 0;

    
`

const Buttons = styled.div`
    margin: 20px 0 0 0;
    width: 100%;
    display: flex;

    span {
        width: 15px;
    }
`

const Button = styled.button`
    i {
        margin-right: 7px;
    }
    cursor: pointer;
    font-weight: 500;

    flex: 1;
    height: 40px;
    color: white;
    border: none;
    background: ${props => props.theme.blue};
    border-radius: 5px;
    transform: scale(1);
    transition: transform .2s ease-out;
    border: 2px transparent solid;
    
    &:active {
        transform: scale(0.9);
    }
    
    &.active {
        background: transparent;
        color: ${props => props.theme.secondaryTextColor};
        border: 1.5px ${props => props.theme.secondaryColor} solid;
    }
`

const Title = styled.h5`
    margin-bottom: 10px; 
`

const Paragraph = styled.p`
    color: ${props => props.theme.secondaryTextColor};
    font-size: 13px;
    margin-bottom: 20px;
`

const CreatorCard = ({onInvite, onFollow}) => {
    return (
        <Card>
            <Avatar extended image={avatar} status='online' name='Jordan Lawson' location='Los Angeles, CA' />
            <Section>
                <Title>Description</Title>
                <Paragraph>Hi! I'm a frontend designer with wide range of knowledge.</Paragraph>
                <Title>Skills</Title>
                <Paragraph>React Node.js Redux</Paragraph>
            </Section>
            <Section>
                
            </Section>
            <Buttons>
                <Button onClick={onInvite}><i class="fas fa-comment-alt"></i>Invite</Button>
                <span></span>
                <Button className='active' onClick={onFollow}><i class="far fa-heart"></i>Follow</Button>
            </Buttons>
        </Card>
    )
}

export default CreatorCard