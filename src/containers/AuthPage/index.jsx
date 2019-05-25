import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

import { signup } from '@store/actions'

import { Container, Brand } from '@libs/style'
import { AuthPanel, AuthForm, Title, TextInput, ButtonInput, AuthHeader, Separator, AuthFooter } from './style'

import logo from '@images/logo.svg'
import google from '@images/g.png'

const Auth = ({ children, height }) => {
    return (
        <AuthPanel>
            <svg style={{ position: 'absolute', zIndex: '0' }} width="400" height={height} viewBox={"0 0 400 " + height} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter x="-500%" y="-500%" width="1000%" height="1000%" filterUnits="objectBoundingBox" id="dropshadow-1">
                        <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter"></feOffset>
                        <feGaussianBlur stdDeviation="35" in="shadowOffsetOuter" result="shadowBlurOuter"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.10 0" in="shadowBlurOuter"></feColorMatrix>
                    </filter>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <rect width="400" height={height} rx="4" fill="#FFF" style="filter:url(#dropshadow-1)"></rect>
                    <rect width="400" height={height} rx="4" fill="#FFF"></rect>
                </g>
            </svg>
            <div style={{ position: 'absolute', zIndex: '10' }} >
                {children}
            </div>
        </AuthPanel>
    )
}

const AuthPage = props => {
    const onSignIn = props.location.pathname == '/signin'
    const googleClientId = "321131066814-02msnaku7ue8dm40n4ic5v14lhmmp1u1.apps.googleusercontent.com"
    return (
        <Fragment>
            <Container>
                <Title>
                    <Brand to='/'>
                        <img src={logo} alt="logo" height="35" width="35" />
                        <p>Karazann</p>
                    </Brand>
                </Title>
                <Auth height={onSignIn ? 437 : 500} >
                    <AuthForm onSubmit={onSignIn ? props.signIn : props.signUp}>
                        <AuthHeader>{onSignIn ? 'Sign in' : 'Sign up'}</AuthHeader>
                        {onSignIn ? null : <TextInput vertical type="text" name="username" autocomplete="username" placeholder="Choose a username&hellip;" />} 
                        <TextInput vertical type="email" name="email" autocomplete="email" placeholder="Your email&hellip;" />
                        <TextInput vertical type="password" name="password" autocomplete="current-password" placeholder="Your password&hellip;" />
                        <ButtonInput primary type="submit" name="signup" value={onSignIn ? 'Sign in' : 'Sign up'} />
                        <Separator>OR</Separator>
                        <GoogleLogin
                            onSuccess={res => console.log(res.accessToken)}
                            clientId={googleClientId}
                            render={renderProps => (
                                <ButtonInput as="button" onClick={renderProps.onClick}>
                                    <img src={google} height={20} width={20} />
                                    <p>{onSignIn ? 'Google Sign-in' : 'Google Sign-up'}</p>
                                </ButtonInput>
                            )} />
                        <AuthFooter>
                            {onSignIn ? <p>Don't have an account</p> : <p>I already have an account</p>}
                            {onSignIn ? <Link to='/signup'>Sign up</Link> : <Link to='/signin'>Sign in</Link> }
                        </AuthFooter>
                    </AuthForm>
                </Auth>
            </Container>
        </Fragment>
    )
}

const processForm = e => {
    e.preventDefault()
    const data = new FormData(e.target)

    const obj = {}
    data.forEach((value, key) => {
        obj[key] = value
    })

    return obj;
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: e => {
            const { username, email, password } = processForm(e)
            dispatch(signup(username, email, password))
        },
        signIn: e => {
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)