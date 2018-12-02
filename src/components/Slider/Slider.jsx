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
            <Slider onChange={this.onSliderChange} className='slider' />
        )
    }
}

export default SliderCustom