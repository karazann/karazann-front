import styled, { css } from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

export const Header = styled.header`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    background: ${props => props.theme.bg1};
`

export const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderDesktop = styled.div`
    display: none;
    position: relative;
    
    @media (min-width: 768px) {
        display: flex;
    }
`

export const SearchBar = styled.div`
    img {
        position: absolute;
        margin: 10.5px;
        height: 13px;
        width: 13px;
        color: ${props => props.theme.secondaryTextColor};
    }

    input {
        position: absolute; 
        height: 35px;
        width: 100%;
        border: none;
        font-size: 15px;
        padding: 0px 15px 0px 40px;
        font-weight: 400;
        font-family: inherit;
        border-radius: 8px; 
        background: ${props => props.theme.primaryColor};
        box-shadow: 0 7px 20px 0 rgba(49, 49, 80, 0.10), 0 2px 20px 0 rgba(0, 0, 0, 0.03);
        color: ${props => props.theme.secondaryTextColor};
    }

    position: relative;
    height: 100%; 

    width: 300px;
`

export const HeaderLink = withRouter(styled(Link)`
    margin: 0 15px 0 22px;
    font-size: 15px;
    height: 38px;
    line-height: 38px;
    font-weight: 500;
    color: ${props => props.theme.typography3};
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.primary1};
    }

    ${props => props.button && css`
        display: inline-flex;
        letter-spacing: 0px;
        color: ${props.theme.primary1};
        border-radius: 4px;
        cursor: pointer;
        justify-content: center;
        text-align: center;
        white-space: nowrap;
        line-height: 38px;
        transition: all .15s ease;

        background: #9285F5;
        color: white;
        box-shadow: 0 8px 16px rgba(146, 133, 245, 0.2);

        margin: 0 0 0 7px;
        padding: 0 15px;

        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 8px 16px rgba(146, 133, 245, 0.3);
            color: white;
        }

        &:active {
            transform: translateY(1px);
            box-shadow: 0 8px 16px rgba(146, 133, 245, 0.07);
        }
    `}
`)
