import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Tilt from '../Tilt'

class ProductPage extends Component {

    
    render() {
        const {  } = this.props;
        let tagPath = '/product/1234' == window.location.pathname
        let className = 'ig'
        const load = () =>{
            className += 'top'
        }

        return (
            <section className="page">
                <div className="container">
                <Tilt className='ticket' options={{ speed: 1500, max: 2,axis:'x', perspective: 1000 }} >
                    <img onLoad={load} className='ig top' src="../../test.svg"/>
                    <div className='fir'>dasd</div>
                    <div className="sec">
                    <a href="#">Bux Now</a> 
                        <a href="#">Contribute</a>
                    </div>
                </Tilt>
                    
                     

                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(ProductPage);