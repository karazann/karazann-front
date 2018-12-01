import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Tilt from '../Tilt'
import images from '../../assets/images/iphonex.png'
import time from './time.svg'
import { timeLeft, getRoundDate } from '../../utils/time'
import moment from 'moment'

class ProductCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: {}
        }
    }

    componentDidMount() {
        this.tick()
        this.timer = setInterval(() => {
            this.tick()
        }, 30000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        const deadline = moment().endOf('day').toDate();

        this.setState({ time: timeLeft(deadline) })
        console.log(moment().endOf('day').add(1, 'ms').toString())
        console.log(moment().endOf('week').toString())
        console.log(moment().endOf('month').toString())
    }

    test(date) {
        var lastday = date.getDate() - (date.getDay() - 1) + 6;
        return new Date(date.setDate(lastday));
    }

    render() {

        return (
            <div className="product-card-container">
                    <NavLink to="/product/blahblah">
                <Tilt className="product-card" options={{ speed: 1500, scale: 1.03, max: 15 }}>

                        <div className="title">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="image">
                            <img src={images} />
                        </div>
                        <div className="progress-text">
                            <p>{this.props.price} $</p>
                            <div className={'tag ' + this.state.time.color}><b>{this.state.time.text}</b>&nbsp;left </div>
                        </div>
                        <div className="progress-wrapper">
                            <div className="progress">
                                <p>{this.props.progress}%</p>
                                <div style={{ width: `${this.props.progress}%` }}></div>
                            </div>
                        </div>

                </Tilt>
                    </NavLink>
            </div>
        )
    }
}

export default ProductCard
