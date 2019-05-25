import styled, {
    css
} from 'styled-components'

export const Footer = styled.footer `
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #9BACBD;
    border-top: 1px solid #DDE7EF;

    margin-top: 50px;
`

export const FooterInner = styled.div `
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 40px;

    @media (min-width: 641px) {
        justify-content: space-between;
    }
`

const flexBase = css `
    flex: none;
    width: 100%;
    display: inline-flex;
    justify-content: center;

    @media (min-width: 641px) {
        flex: 50%;
    }
`

export const FooterBrand = styled.div `
    ${props => flexBase}
    margin-bottom: 24px;

    @media (min-width: 641px) {
        flex: 50%;
        justify-content: flex-start;
    }
`

export const FooterLinks = styled.ul `
    ${props => flexBase}
    margin-bottom: 24px;

    li  {
        + li {
            margin-left: 16px;
        }
    }

    @media (min-width: 641px) {
        flex: 50%;
        justify-content: flex-end;
        order: 1;
        margin-bottom: 0;
    }
`

export const FooterSocialLinks = styled.ul `
    ${props => flexBase}
    margin-bottom: 24px;

    li  {
        + li {
            margin-left: 16px;
        }
    }

    li {
        display: inline - flex;
        a {
            padding: 8 px;
        }
    }

    @media (min-width: 641px) {
        justify-content: flex-end;
    }
`

export const Copyright = styled.div `
    @media (min-width: 641px) {
        flex: 50%;
        justify-content: flex-start;
    }
`