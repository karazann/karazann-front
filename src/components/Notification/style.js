import styled from 'styled-components'

export const NotificationMenu = styled.button`
    border: none;
    cursor: pointer;
    height: 24px;
    width: 24px;
    background: ${props => props.active ? props.theme.primary1 : props.theme.primary3};
    border-top-left-radius: 50%;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    text-align: center;
    display: flex;
    margin: 7px;
    margin-right: 25px;
`

export const Counter = styled.p`
    font-size: 13px;
    color: ${props => props.active ? '#FFFFFF' :  props.theme.secondaryTextColor };
    padding-left: ${props => props.over ? 0 : 1}px;
    margin: auto auto;
    font-weight: 700;
`

export const Wrapper = styled.div`
    position: absolute;
    top: 50px;
    right: 160px;
    z-index: 1000;
    perspective: 1300px;
    width: 320px;
`

export const DropdownSection = styled.section.attrs(
    props => ({
        style: {
            opacity: props.opacity,
            transform: `rotateX(${props.rotate}deg)`
        }
    })
)`
    background: ${props => props.theme.bg2};
    transform-style: preserve-3d;
    transform-origin: 50% 0;
    display: ${props => props.opacity <= 0.1 ? 'none' : 'block'};
    border-radius: 8px;

    div {
        .track{
            background: none !important;
            top: 7px !important;
            height: calc(100% - 14px) !important;

            .thumb {
                background: rgba(0, 0, 0, 0.3) !important;
            }
        }

        .wrapper {
            .content {
                padding: 4px 7px 14px 14px;
            }
        }
    }
`

export const Title = styled.h4`
    padding: 20px 20px 6px 20px;
`

export const Notification = styled.div.attrs(
    props => ({
        style: {
            transform: `scale(${props.scale})`
        }
    })
)`
    box-shadow: 0 2px 16px rgba(20,20,20,0.05);
    height: 100px;
    width: 100%;
    display: block;
    background: ${props => props.theme.bg1};
    border: none;
    border-radius: 5px;
    margin: 10px 0 0px 0;
`