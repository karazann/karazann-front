
import styled, { css } from 'styled-components'

export const StyledDropdown = styled.div`

`

export const DropdownToggle = styled.button`
    border: none;
    background: transparent;

    font-size: 15px;
    height: 38px;
    line-height: 38px;
    font-weight: 400;
    color: inherit;
    text-decoration: none;
`

export const DropdownItem = styled.li`
    width: 208px;

    margin: 0;
    border-radius: 0;

    background: ${props => props.theme.bg2};
    margin: 10px;

    border-radius: 4px;

    font-size: 15px;

    transition: .3s;

    padding: 10px 40px 10px 15px !important;
    line-height: 22px!important;
`

export const DropdownMenu = styled.ul`

    opacity: 0;
    visibility: hidden;
    transition: all .25s;
    transform: translate3d(0, 15px, 0);

    ${props => props.opened && css`
        opacity: 1;
        visibility: visible;
        transform: translate3d(0,0,0);
    `}

    background: ${props => props.theme.bg1};
    border-radius: 8px;

    position: absolute;
    top: 100%;
    z-index: 99999;

    box-sizing: border-box;
    margin-top: 30px;
    
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: -10px;
        background: transparent;
        width: 100%;
        height: 30px;
    }

    &::after {
        content: "";
        position: absolute;
        left: 25px;
        top: -5px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid white;
    }
`