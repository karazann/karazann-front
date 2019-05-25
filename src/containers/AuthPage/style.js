import styled from 'styled-components'


export const Title = styled.div`
    width: 400px;
    text-align: center;
    color: white;
    margin: 100px auto 30px auto;

    display: flex;
    justify-content: space-around;
`

export const AuthPanel = styled.section`
    width: 400px;
    height: 500px;
    margin: 0 auto;
    position: relative;

    svg {
        overflow: visible;
    }

    & >div {
        width: 100%;
        height: 100%;
        padding: 30px;
    }
`

export const AuthForm = styled.form`
    
`

export const AuthHeader = styled.h3`
    text-align: center;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${props => props.theme.typography3};
`

export const Separator = styled.h5`
    margin: 25px 0;
    width: 100%;
    text-align: center;
    font-weight: 700;

    &::before, &::after {
        content: '';
        display: inline-block;
        border-top: 1px solid #DDE7EF;
        width: 120px;
        margin: 0 10px;
        font-variant: small-caps;
        transform: translateY(-5px);
    }
`

export const AuthFooter = styled.div`
    display: block;
    text-align: center;
    font-size: 15px;
    margin: 30px 0;
    display: flex;
    flex-direction: row;

    p {
        font-weight: 400;
        color: ${props => props.theme.typography3}
    }
    
    a {
        margin-left: 10px;
        font-weight: 700;
        color: ${props => props.theme.primary1}
    }
`

const Input = styled.input`
    font-size: 15px;
    letter-spacing: 0px;
    line-height: 20px;
    border-radius: 5px;
    padding: 13px 16px;
    height: 48px;
    box-shadow: none;

    margin-bottom: ${props => props.vertical ? '15px' : '0px'};
    margin-right: ${props => props.horizontal ? '15px' : '0px'};
`

export const ButtonInput = styled(Input)`
    transition: all .15s ease;

    ${props => props.primary ? 'box-shadow: 0 8px 16px rgba(255,94,91,0.25);' : 'box-shadow: 0 8px 24px rgba(20,20,20,0.10);'}
    ${props => props.primary ? 'background: #fc6b74; background: linear-gradient(65deg, #FF5E5B 0%, #F8778D 100%);' : 'background: white;'}

    &:hover{
        ${props => props.primary ? 'box-shadow: 0 8px 16px rgba(255,94,91,0.4);' : 'box-shadow: 0 8px 24px rgba(20,20,20,0.16);'}
        ${props => props.primary ? 'background: #fc7080; background: linear-gradient(65deg, #ff6360 0, #f87c91 100%);' : 'background: white;'}

        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px);
        ${props => props.primary ? 'box-shadow: 0 8px 16px rgba(255,94,91,0.1);' : 'box-shadow: 0 8px 24px rgba(20,20,20,0.05);'}
    }

    color: ${props => props.primary ? '#fff' : 'intherit'};

    cursor: pointer;

    border: none;
    font-weight: 500;
    line-height: 20px;
    text-decoration: none !important;
    
    border-radius: 4px;
    cursor: pointer;
    justify-content: center;
    padding: 14px 32px;
    height: 48px;
    text-align: center;
    white-space: nowrap;
    position: relative;

    img {
        position:absolute;
        left: 14px;
    }


    width: 100%;
`

export const TextInput = styled(Input)`
    background: #fff;
    border: 2px solid ${props => props.theme.bg3};
    color: ${props => props.theme.typography2};
    max-width: 100%;
    width: 100%;

    font-weight: 500;

    transition: all .1s;

    &:focus {
        border: 2px solid ${props => props.theme.primary3};
    }

    &::placeholder {
        color: ${props => props.theme.typography4};
    }

    &::-ms-input-placeholder {
        color: ${props => props.theme.typography4};
    }

    &:-ms-input-placeholder {
        color: ${props => props.theme.typography4};
    }
`