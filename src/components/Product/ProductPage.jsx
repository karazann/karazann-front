import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Tilt from '../Tilt'
import { createSelector } from 'reselect'



import { SELECT_PRODUCT } from '../../actions/types';

import thunder from '../../assets/images/thunder.svg'
import ticket from '../../assets/images/ticket.svg'

class ProductPage extends Component {

    render() {
        if (this.props.loading)
            return <div>Loading</div>

        if (!this.props.product)
            return <Redirect to='/fun' />

        return (
            <section className="page">
                <div className="container">
                    <Tilt className='ticket' options={{ speed: 1500, max: 2, perspective: 1000, speed: 300, transition: false }} >
                        <img className='d-none d-md-block ig' src={ticket} />
                        {/*<img className='d-block d-md-none ig' src="/ticket-vertical.svg" />*/}
                        <div className="line"></div>
                        <div className="grid">
                            <div className="title">
                                <h2>{this.props.product.title}</h2>
                            </div>
                            <div className="buttons">
                                <a href="#"><img src={thunder} alt="" /> <p>Instant Buy</p></a>
                                <a href="#">Contribute</a>
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

export default connect(mapStateToProps)(ProductPage);