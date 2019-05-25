import React, { Component } from 'react'

import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'
import './Slider.scss'

class SliderCustom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 50
        }

        this.onSliderChange = this.onSliderChange.bind(this)
    }

    onSliderChange(value) {
        console.log(value)
        this.setState({
            value
        })
    }

    render() {
        return (
            <div className='slider'>
                <div className='numbers'>
                    <p>{this.props.min}$</p>
                    <p>{this.props.max}$</p>
                </div>
                <Slider {...this.props} onChange={this.onSliderChange} value={this.state.value} className='slider' />
            </div>
        )
    }
}

export default SliderCustom