import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Brand = styled(Link)`
    display: flex;
    height: 35px;
    font-size: 15px;
    width: 142px;
    line-height: 35px;
    text-decoration: none;
    color: ${props => props.white ? 'white' : props.theme.typography1};
    
    img {
        z-index: 1100;
        height: 35px;
        width: 35px;
        filter: brightness(100%) ;
    }
    
    p {
        margin-left: 8px;
        margin-top: 0;
        margin-bottom: 24px;
        font-family: "Pouttu";
        font-size: 15px;
        font-weight: 400;
    }
`

export const HorizontalList = styled.ul`
    display: flex;
    flex-direction: row;
`

export const VerticalList = styled.ul`
    display: flex;
    flex-direction: column;
`

export const ListItem = styled.li``

export const PageSection = styled.section`
    width: 100%;
`

export const Container = styled.div`
    width:100%;
    margin: 0 auto;
    padding-left:16px;
    padding-right:16px;

    @media (min-width: 481px) {
        padding-left:24px;
        padding-right:24px
    }

    max-width: 1320px;
`

export const Page = styled.div`
    margin-top: 50px;
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 32px;
    color: ${props => props.theme.typography1};
    margin-bottom: 30px;
`

export const ResponsiveGrid = styled.div`
    justify-content: center;
    display: grid;
    grid-gap: 30px;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    padding: 0 24px;

    div {
        background: white;
        border-radius: 8px;
        padding: 20px;
        height: 300px;
        box-shadow: 0 7px 20px 1px rgba(49, 49, 80, 0.05), 0px 2px 0px 0px rgba(0, 0, 0, 0.03);
    }

    @media (min-width: 555px) {
        grid-template-rows: auto 1fr;
        padding: 0;
        grid-template-columns: repeat(auto-fill, 230px);
    }
`