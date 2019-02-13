import React from 'react'
import styled from 'styled-components'
import ResponsiveGrid from '../components/ResponsiveGrid'
import MultiSwitch from '../components/MultiSwitch';

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

const options = [
    {
        title: 'All Project',
        width: 100
    }, {
        title: 'My Projects',
        width: 100
    }
]

const Header = (
    <StyledHeader>
        <h1>Projects</h1>
        <MultiSwitch options={options} onChange={console.log} />
    </StyledHeader>
)

const ProjectsPage = props => {
    return (
        <Page>
            <ResponsiveGrid maxWidth={1500} itemWidth={300} header={Header}>
                {
                    ['1', '2', '3'].map((_, i) => <p>{_}</p>)
                }
            </ResponsiveGrid>
        </Page>
    )
}

export default ProjectsPage