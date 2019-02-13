import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import ReactBreakpoints from 'react-breakpoints'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import SideNav from './SideNav'
import Dialog from '../components/Dialog'
import Overlay from '../components/Overlay'

import { darkTheme, lightTheme } from './Themes'
import { breakpoints } from './Breakpoints'
import { OPEN_NEW, CLOSE_ALL } from '../constants/action-types'
import '../assets/scss/style.scss'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Concert+One');

    #app, body, html {
        height: 100%;
        width: 100%;
    }
    
    body {
        background:  ${props => props.dark ? darkTheme.background : lightTheme.background};
        font-family: ${props => props.dark ? darkTheme.fontFamily : lightTheme.fontFamily};
        color: ${props => props.dark ? darkTheme.primaryTextColor : lightTheme.primaryTextColor};
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
    }
`

const Grid = styled.div`
    min-height: 100%;
    min-height: calc(100% + 200px);

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 72px 1fr 200px;
`

const Main = styled.main`
    grid-column: 1;
    grid-row: 2;
    display: flex;
`

const Footer = styled.footer`
    grid-column: 1;
    grid-row: 3;

    background: ${props => props.theme.primaryColor};
`

const Header = React.lazy(() => import(/* webpackChunkName: "Header", webpackPreload: true */'./Header'))
const Creators = React.lazy(() => import(/*webpackChunkName: "Home", webpackMode : "lazy" */'./CreatorsPage'))
const Projects = React.lazy(() => import(/*webpackChunkName: "Project", webpackMode : "lazy" */'./ProjectsPage'))


const App = ({ dark, overlay, closeAll, pushOpened, newOpened, inviteOpened }) => {
    return (
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <ReactBreakpoints breakpoints={breakpoints}>
                <GlobalStyle dark={dark} />
                <Overlay onClick={closeAll} active={overlay} />
                <Dialog opened={newOpened} onCancel={closeAll} />
                <Dialog opened={inviteOpened} onCancel={closeAll} >
                    fsdaf
                </Dialog>
                <Grid>
                    <Suspense style={{ background: 'red' }} fallback={<div></div>}>
                        <Header />
                    </Suspense>
                    <Main>
                        <SideNav opened={pushOpened} attached={true} />
                        <Suspense fallback={<div></div>}>
                            <Switch>
                                <Route exact path='/' />
                                <Route path='/creators' component={Creators} />
                                <Route path='/projects' component={Projects} />
                                <Route path='/jobs' />
                                {/*<Route path='/auth/:action' component={AuthPage} />*/}
                                {/*<Route path='/product/:slug' component={ProductPage} />*/}
                                {/*<PrivateRoute path='/account' loggedIn={this.props.loggedIn} component={AccountPage} />*/}
                                <Route path='/404' render={() => (<div>404</div>)} />
                                <Route render={() => (<Redirect to='/404' />)} />
                            </Switch>
                        </Suspense>
                    </Main>
                    <Footer />
                </Grid>
            </ReactBreakpoints>
        </ThemeProvider>
    )
}

const mapStateToProps = state => {
    return {
        dark: state.ui.darkTheme,
        overlay: state.ui.overlay,
        newOpened: state.ui.newOpened,
        pushOpened: state.ui.pushNavOpened,
        avatarOpened: state.ui.avatarOpened,
        inviteOpened: state.ui.inviteOpened
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleNew: e => { dispatch({ type: OPEN_NEW }) },
        closeAll: e => { dispatch({ type: CLOSE_ALL }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
