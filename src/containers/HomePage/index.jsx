import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { PageSection, Container } from '@libs/style'

const HomePage = () => {
    return (
        <Fragment>
            <Container>
                <PageSection>
                </PageSection>
            </Container>
        </Fragment>
    )
}

export default connect(null, null)(HomePage)