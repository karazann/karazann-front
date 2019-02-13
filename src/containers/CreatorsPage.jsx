import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import CreatorCard from '../components/CreatorCard'
import MultiSwitch from '../components/MultiSwitch'
import ResponsiveGrid from '../components/ResponsiveGrid';

const Page = styled.section`
    width: 100%;
    padding: 30px 0 30px 0;
`

const Header = styled.header`
    display: flex;
    margin: 20px;
    height: 45px;
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

class CreatorsPage extends Component {

    render() {
        const freelancers = [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ]
        return (
            <Page>
                <ResponsiveGrid maxWidth={1500} itemWidth={300} header={<Header><h1>Creators</h1></Header>}>
                    {
                        freelancers.map((_, i) => <CreatorCard onInvite={this.props.handleInvite} />)
                    }
                </ResponsiveGrid>
            </Page>
        )
    }
}

const mapDispathToProps = dispatch => {
    return {
        handleInvite: () => { dispatch({ type: 'OPEN_INVITE' }) }
    }
}

export default connect(null, mapDispathToProps)(CreatorsPage)