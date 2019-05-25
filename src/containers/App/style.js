import styled, {
    createGlobalStyle
} from 'styled-components'

import {
    darkTheme,
    lightTheme
} from '@libs/themes'

import Pouttu from '@fonts/pouttu.regular.ttf'

export const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'Pouttu';
        font-weight: normal;
        src: url(${Pouttu}) format('truetype');
    }

    @import url('https://fonts.googleapis.com/css?family=Roboto:500,400,600,700,800');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,800');

    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote {
        &:before,
        &:after {
            content: "";
            content: none;
        }
    }

    q {
        &:before,
        &:after {
            content: "";
            content: none;
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a, a:hover, a:active, a:disabled {
        text-decoration: none;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    input:focus, select:focus, textarea:focus, button:focus {
        outline: none;
    }

    #app, body, html {
        height: 100%;
        width: 100%;
    }

    body, button, input, select, textarea {
        font-family: "Fira Sans", sans-serif;
        color: ${props => props.dark ? darkTheme.typography2 : lightTheme.typography2 };
    }

    body {
        background: ${props => props.theme.bg2};
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
    }
`

export const Wrapper = styled.div `
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: calc(100vh + 166px);
`

export const Main = styled.main `
    display: flex;
    flex: 1 0 auto;
`

export const Footer = styled.footer `
    background: ${props => props.theme.primaryColor};
`