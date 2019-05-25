import styled from 'styled-components'

export const Overlay = styled.div.attrs(
    props => ({ style: { opacity: props.opacity } })
)`
    display: ${props => props.opacity <= 0.1 ? 'none' : 'block'};
    position: fixed;
    z-index: 999;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    
    cursor: pointer;
    background: rgba(0,0,0,0.3);
`