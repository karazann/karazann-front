import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import './HomePage.scss'
import logo from '../../assets/images/logo-white.svg'

class HomePage extends Component {
    render() {
        if (this.props.loading)
            return (
                <div className='spinner' >
                    <img src={logo} alt="karazann-logo" />
                    <img src={logo} alt="karazann-logo" />
                </div>
            )

        return (
            <section className="home">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                    <div className="col-lg-3 col-md-4 col-xs-6"><div></div></div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(HomePage)