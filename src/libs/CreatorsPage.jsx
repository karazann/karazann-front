import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import CreatorCard from './CreatorCard'
import ResponsiveGrid from './ResponsiveGrid'
import avatar from '../assets/images/avatar.jpg'
import avatar2 from '../assets/images/avatar2.jpg'

const Page = styled.section`
    width: 100%;
    padding: 30px 0 30px 0;
`

const StyledHeader = styled.header`
    display: flex;
    margin: 20px;
    height: 45px;
    justify-content: space-between;
    
    h1 {
        line-height: 38px;
    }
`

const options = [{
    title: 'All',
    width: 40
}, {
    title: 'Teams',
    width: 60
}, {
    title: 'Freelancers',
    width: 90
}]

const Header = (
    <StyledHeader>
        <h1>Creators</h1>
    </StyledHeader>
)

const creators = [
    {
        name: 'Jordan Belford',
        status: 'offline',
        avatar,
        location: 'Los Angeles, CA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: [
            'React',
            'Redux',
            'Express'
        ]
    },
    {
        name: 'Roland Sz. Kovács',
        status: 'online',
        avatar: avatar2,
        location: 'Szeged, HUN',
        description: 'Hi! I\'m the creator of this site, so be proud at me. :D',
        skills: [
            'CREATE',
            'OF',
            'THIS',
            'SITE'
        ]
    },
    {
        name: 'Ruth M Alvarez',
        avatar: 'https://www.fakepersongenerator.com/Face/female/female2015102398120142.jpg',
        status: 'online',
        location: 'Fairview Park, NYC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: [
            'HTML',
            'CSS',
            'JS'
        ]
    },
    {
        name: 'Patrick S Pendleton',
        avatar: 'https://www.fakepersongenerator.com/Face/male/male108589125971.jpg',
        status: 'offline',
        location: 'Staten Island, NYC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: [
            'Hadoop',
            'Python',
            'Django'
        ]
    },
    {
        name: 'David Lightner',
        avatar: 'https://www.fakepersongenerator.com/Face/male/male1085111482391.jpg',
        status: 'offline',
        location: 'Hendersonville, TN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: [
            'Firebase',
            'Angular',
            'Flutter'
        ]
    },
    {
        name: 'Jason Canty',
        avatar: 'https://www.fakepersongenerator.com/Face/male/male1084277565216.jpg',
        status: 'away',
        location: 'Loveland, CO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: [
            'DevOp',
            'AWS',
            'S3'
        ]
    }
]

const CreatorsPage = ({handleInvite}) => {
    return (
        <Page>
            <ResponsiveGrid maxWidth={1600} itemWidth={320} header={Header}>
                {
                    creators.map((creator, i) => <CreatorCard user={creator} key={i} onInvite={handleInvite} />)
                }
            </ResponsiveGrid>
        </Page>
    )
}

const mapDispathToProps = dispatch => {
    return {
        handleInvite: () => { dispatch({ type: 'OPEN_INVITE' }) }
    }
}

export default connect(null, mapDispathToProps)(CreatorsPage)