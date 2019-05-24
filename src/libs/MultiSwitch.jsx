import React, { Component } from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

const Wrapper = styled.div`
    position: relative;
    height: 45px;
    display: flex;
    font-size: 12px;
    padding: 6px;
    border-radius: 8px;
    width: ${props => props.width + 12}px;
    background: ${props => props.theme.primaryColor};
    box-shadow: 0 0 30px 0px rgba(0,0,0,0.03);
`

const Button = styled.button`
    cursor:pointer;
    z-index: 10;
    height: 100%;
    transition: .2s;
    width: ${props => props.width}px;
    font-weight: 600;
    color: ${props => props.selected ? 'white' : props.theme.secondaryTextColor};
    border: none;
    background: none;
`

const Switch = styled.div.attrs(
    props => ({
        style: {
            width: props.width,
            left: props.offset + 6
        }
    })
)`
    z-index: 5;
    position: absolute;
    height: 33px;
    border-radius: 5px;
    background: ${props => props.theme.blue};
`

class MultiSwitch extends Component {

    constructor(props) {
        super(props)
        let widthSum = 0
        props.options.map((item) => {
            item.offset = widthSum;
            widthSum += item.width
        })
        this.state = {
            widthSum,
            selected: 0
        }
    }

    handleSelect(key) {
        this.props.onChange(key)
        this.setState({
            selected: key
        })
    }

    render() {
        return (
            <Wrapper width={this.state.widthSum}>
                {
                    this.props.options.map((option, i) =>
                        <Button key={i} selected={i == this.state.selected} width={option.width} onClick={() => { this.handleSelect(i) }}>{option.title}</Button>
                    )
                }
                <Motion style={{w: spring(this.props.options[this.state.selected].width, presets.noWobble), x: spring(this.props.options[this.state.selected].offset, presets.stiff) }}>
                    {style => (
                        <Switch width={style.w} offset={style.x} />
                    )}
                </Motion>
            </Wrapper >
        )
    }
}

export default MultiSwitch
