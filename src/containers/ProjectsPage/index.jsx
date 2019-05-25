import React from 'react'
import { connect } from 'react-redux'

import { Page, PageSection, Container, Title, ResponsiveGrid } from '@libs/style'

const ProjectsPage = props => {
    return (
        <Page>
            <Container>
                <PageSection>
                    <Title>Projects</Title>
                    <ResponsiveGrid>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </ResponsiveGrid>
                </PageSection>
            </Container>
        </Page>
    )
}

export default connect(null, null)(ProjectsPage)