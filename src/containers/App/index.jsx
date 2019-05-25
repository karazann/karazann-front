import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AsyncRoute from 'preact-async-route'

import { CLOSE_ALL } from '@store/constants'

import Header from '@containers/Header'
import Footer from '@components/Footer'
import Overlay from '@components/Overlay'
import PrivateRoute from '@components/PrivateRoute'

import { darkTheme, lightTheme } from '@libs/themes'
import { GlobalStyle, Wrapper, Main } from './style'

/*lazy loaded routes*/
const StartPage = async (url, cb, props) => {
    if(props.loggedIn)
        var module = await import(/* webpackPrefetch: true, webpackChunkName: "HomePage" */ '../HomePage');
    else
        var module = await import(/* webpackChunkName: "LandingPage" */ '../LandingPage'); //no prefetch becouse logged in users dont need this

    return module.default;
};

const ProjectsPage = async (url, cb, props) => {
    var module = await import(/* webpackPrefetch: true, webpackChunkName: "ProjectsPage" */ '../ProjectsPage');
    return module.default;
};

const AuthPage = async (url, cb, props) => {
    var module = await import(/* webpackPrefetch: true, webpackChunkName: "AuthPage" */ '../AuthPage');
    return module.default;
};

const App = ({ dark, overlay, closeAll, loggedIn, location }) => {
    const onAuthPage = location.pathname == '/signup' || location.pathname == '/signin'
    return (
        <ThemeProvider theme={dark && loggedIn ? darkTheme : lightTheme}>
            <Fragment>
                <GlobalStyle dark={dark} />
                <Overlay onClick={closeAll} active={overlay} />
                
                <Wrapper>
                    <Header hidden={onAuthPage}/>
                    <Main>
                        <Switch>
                            <AsyncRoute exact path='/' loggedIn={loggedIn} getComponent={StartPage}/>
                            <AsyncRoute path='/(signin|signup)/' getComponent={AuthPage} loading={()=><p>Loading...</p>}/>
                            {/*Private routes*/}
                            <PrivateRoute path='/projects' loggedIn={loggedIn} getComponent={ProjectsPage}/>
                            {/*404*/}
                            <Route path='/404' render={() => <div>404</div>} />
                            <Route render={() => <Redirect to='/404' />} />
                        </Switch>
                    </Main>
                    <Footer/>
                </Wrapper>
            </Fragment>
        </ThemeProvider>
    )
}

const mapStateToProps = state => {
    return {
        dark: state.ui.darkTheme,
        overlay: state.ui.overlay,
        loggedIn: state.user.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeAll: e => { dispatch({ type: CLOSE_ALL }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
