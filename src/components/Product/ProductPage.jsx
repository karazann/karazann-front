import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Tilt from '../Tilt'

class ProductPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className="page">
                <div className="container">
                    <Tilt className='ticket' options={{ speed: 1500, max: 2, perspective: 1000, speed: 300, transition: false }} >
                        <img className='d-none d-md-block ig' src="../../ticket.svg" />
                        <img className='d-block d-md-none ig' src="../../ticket-vertical.svg" />
                        <div className="line"></div>
                        <div className="grid">
                            <a href="#">Instant Buy</a>
                            <a href="#">Contribute</a>
                        </div>
                    </Tilt>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps)(ProductPage);