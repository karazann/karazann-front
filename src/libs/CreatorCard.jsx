import React from 'react'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import Avatar from '../components/Profile/Avatar'

const Card = styled.article`
    width: 100%;
    border-radius: 10px;
    background: ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    align-items: flex-start;
    box-shadow: 0 7px 20px 0 rgba(49, 49, 80, 0.10), 0 2px 20px 0 rgba(0, 0, 0, 0.03);
`

const StyledAvatar = styled(Avatar)`
    margin: 25px;
`

const Section = styled.section`
    height: 60px;
    width: 240px;
    background: ${props => props.theme.secondaryColor};
    padding: 20px;
    display: flex;
    margin: 0 19.5px ;
    border-radius: 5px;

    p {
        flex: 1;
        color: ${props => props.theme.purple};
        font-weight: 500;
        line-height: 20px;
        text-align: center;
    }

    p:nth-child(2) {
        color: ${props => props.theme.blue};
    }
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
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

const StyledTruncate = styled(Truncate)`
    height: 110px;
    padding: 0 25px 0px 25px;
    span {
        span {
            line-height: 15px;
            font-size: 13px;
            font-weight: 400;
            color: ${props => props.theme.secondaryTextColor};
            a {
                color: ${props => props.theme['blue']};
            }
        }
    }
`

const SkillList = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: ${props => props.theme.secondaryTextColor};
    overflow: hidden;
    padding: 20px 25px;
    width: 100%;
    text-align: center;
`

const Skill = styled.a.attrs(
    props => {

        let ar = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
        return {
            style: {
                color: props.theme.name == 'dark' ? props.theme[props.color] : 'white',
                background: props.theme.name == 'light' ? props.theme[props.color] : 'transparent',
                border: `solid 2px ${props.theme[props.color]}`
            }
        }
    }
)`
    cursor: pointer;
    display: inline-block;
    line-height: 18px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 50px;
    margin: 2px 4px;
    padding: 2px 6px;
`


const CreatorCard = ({ onInvite, onFollow, user }) => {
    return (
        <Card>
            <StyledAvatar extended image={user.avatar} status={user.status} name={user.name} location={user.location} />

            <StyledTruncate width={500} lines={2} ellipsis={<span>... <a href='#'>Read{'\u00a0'}full</a> </span>}>
                {user.description}
            </StyledTruncate>
            <SkillList >{user.skills.map((s, i) => <Skill color='green' key={i}>{s}</Skill>)}</SkillList>
            <Section>
                <p>5438 <i className="fas fa-fire"></i></p>
                <p>1500 <i className="fas fa-dollar-sign"></i><strong>/Hr</strong></p>
            </Section>
            <Buttons>
                <Button onClick={onInvite}><i className="fas fa-comment-alt"></i>Invite</Button>
                <span></span>
                <Button className='active' onClick={onFollow}><i className="far fa-heart"></i>Follow</Button>
            </Buttons>
        </Card>
    )
}

export default CreatorCard