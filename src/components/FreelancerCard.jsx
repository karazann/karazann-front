import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

import avatar from '../assets/images/avatar.jpg'

const Card = styled.article`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    background: ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`

const Section = styled.section`
    width: 100%;
    padding: 20px 0 0 0;
`

const Title = styled.h5`
    margin-bottom: 10px;
    `
const Paragraph = styled.p`
color: ${props => props.theme.secondaryTextColor};
    font-size: 13px;
`

const FreelancerCard = props => {
    return (
        <Card>
            <Avatar extended image={avatar} status='online' name='Jordan Lawson' location='Los Angeles, CA'/>
            <Section>
                <Title>Description</Title>
                <Paragraph>Hi! I'm a frontend designer with wide range of knowledge.</Paragraph>
            </Section>
        </Card>
    )
}

export default FreelancerCard