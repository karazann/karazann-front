import styled from 'styled-components'

const statusColor = (theme, status) => {
    switch (status) {
        case 'online':
            return theme.additional3
        case 'offline':
            return theme.blue
        default:
            return theme.grey
    }
}

export const Avatar = styled.div`
    height: ${props => props.extended ? 60 : 38}px;
    justify-content: flex-end;
    display: flex;
    position: relative;
`

export const Icon = styled.img`
    border-radius: 4px;
    height: ${props => props.extended ? 60 : 35}px;
    width: ${props => props.extended ? 60 : 35}px;
    margin-right: 15px;
    background-color: rgba(66, 112, 244, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        margin-left: -1px;
        font-size: 20px;
        font-weight: 400;
        color: white;
    }
`

export const Status = styled.span`
    border-radius: 5px;
    background: ${props => statusColor(props.theme, props.status)};
    box-shadow: 0 0 0 3px ${props => props.theme.primaryColor};
    position: absolute;

    top: ${props => props.extended ? 47 : 30}px;
    left: ${props => props.extended ? 47 : 30}px;

    height: ${props => props.extended ? 11 : 9}px;
    width: ${props => props.extended ? 11 : 9}px;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Paragraph = styled.p`
    color: ${props => props.theme.typography3};
    line-height: ${props => props.extended ? 25 : 35}px;
    font-size: 14px;
    font-weight: 500;
    margin-right: 15px;
`

export const Paragraph2 = styled.p`
    color: ${props => props.theme.typography3};
    line-height: ${props => props.extended ? 20 : 35}px;
    font-size: 13px;
    font-weight: 500;
    margin-right: 15px;
`

export const ProfileMenu = styled.button`
    display: flex;
    border: none;
    height: 35px;
    background: transparent;
    cursor: pointer;

    padding: 0;
`

export const Arrow = styled.span.attrs(
    props => ({style: { transform: `rotate(${props.rotation}deg)` }})
)`
    color: ${props => props.theme.typography3};
    line-height: 38px;
    font-size: 14px;
`

export const Wrapper = styled.div`
    position: absolute;
    top: 50px;
    right: 0px;
    z-index: 2000;
    perspective: 1000px;
    height: auto;
    width: 180px;
`

export const DropdownSection = styled.section.attrs(
    props => ({
        style: {
            opacity: props.opacity,
            transform: `rotateX(${props.rotate}deg)`
        }
    })
)`
    
    transform-style: preserve-3d;
    transform-origin: 50% 0;
    border-radius: 4px;
    display: ${props => props.opacity <= 0.1 ? 'none' : 'block'};
	background: ${props => props.theme.bg1};
	padding: 8px;
`

export const List = styled.ul`
    list-style: none;
`

export const DropdownItem = styled.button`
    color: ${props => props.theme.typography3};
    border: none;
    background: transparent;
    font-size: 14px;
    line-height: 45px;
    height: 45px;
    padding: 0 20px;
    cursor: pointer;
    font-weight: 500;
    text-align: left;
`