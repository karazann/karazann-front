import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import Tilt from '../Tilt'
import { createSelector } from 'reselect'

import Slider from '../Slider/Slider'
import Selector from "../Selector"

import './ProductPage.scss'

import thunder from '../../assets/images/thunder.svg'
import xbox from '../../assets/images/xboxx.png'
import ticket from '../../assets/images/template.png'

class ProductPage extends Component {

    render() {
        const show = false

        if (this.props.loading)
            return <div>Loading</div>

        if (!this.props.product)
            return <Redirect to='/fun' />

        return (
            <section className="page">
                <div className="container">
                    <Tilt className='ticket' options={{ speed: 1500, max: 2, perspective: 1000, speed: 300, transition: false }} >

                        <div className="line"></div>
                        <div className="grid">
                            <div className="title">
                                <h1>{this.props.product.title}</h1>
                            </div>
                            <div className='image'>
                                <div className="wrap">
                                    <img src={xbox} alt="" />
                                </div>
                            </div>
                            <div className='price'>
                                
                            </div>
                            <div className='options'>
                                <Selector />
                                {/*<Selector id='test2' name='test' />*/}
                            </div>
                            <div className="buttons">
                                {/*<a href="#"><img src={thunder} alt="" /> <p>Instant Buy</p></a>*/}

                                {/*<Slider min={5} max={250} />*/}
                                <button className='contrubute-btn'>Contribute</button>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </section>
        )

    }
}

const getPageProduct = createSelector(
    (state, props) => props.match.params.slug,
    (state, props) => state.products.items,
    (slug, products) => {
        if (products) {
            const product = products.filter(item => item.slug === slug)[0]
            console.log(product)
            return product
        }
    }
)

const mapStateToProps = (state, props) => {
    return {
        loading: state.products.loading,
        product: state.products.loading ? null : getPageProduct(state, props)
    }
}

export default withRouter(connect(mapStateToProps)(ProductPage))