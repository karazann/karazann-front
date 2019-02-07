import React, {Suspense, createContext} from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import ReactBreakpoints from 'react-breakpoints'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import SideNav from './SideNav'
import ProjectPage from '../components/Project/ProjectPage'
import Dialog from '../components/Dialog/Dialog'
import Overlay from '../components/Overlay'

import Header from './Header'
import HomePage from './Home';

import { darkTheme, lightTheme } from './Themes'
import { breakpoints } from './Breakpoints'
import { TOGGLE_NEW_DIALOG, CLOSE_ALL } from '../constants/action-types'
import '../assets/scss/style.scss'

const c = createContext()
console.log(c)

const GlobalStyle = createGlobalStyle`
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
    grid-template-columns: 1fr minmax(200px, 1920px) 1fr;
    grid-template-rows: 72px 1fr 200px;
`

const Main = styled.main`
    grid-column: 2;
    grid-row: 2;

    display: flex;
`

const Footer = styled.footer`
    grid-column: 1 / span 3;
    grid-row: 3;

    background: ${props => props.theme.primaryColor};
`

const App = ({ dark, overlayActive, closeAll, pushOpened, newOpened, toggleNew }) => {
    return (
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <ReactBreakpoints breakpoints={breakpoints}>
                <GlobalStyle dark={dark} />
                <Overlay onClick={closeAll} active={overlayActive} />
                <Dialog opened={newOpened} onCancel={closeAll} />
                <Grid>
                    <Header />
                    <Main>
                        <SideNav opened={pushOpened} attached={true} />
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route path='/projects' component={ProjectPage} />
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
        pushOpened: state.ui.pushNavOpened,
        newOpened: state.ui.newDialogOpened,
        avatarOpened: state.ui.avatarDropdownOpened,
        overlayActive: state.ui.overlayActive
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleNew: e => { dispatch({ type: TOGGLE_NEW_DIALOG }) },
        closeAll: e => { dispatch({ type: CLOSE_ALL }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
