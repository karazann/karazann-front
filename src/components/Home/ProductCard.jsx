import React from 'react'
import { NavLink } from 'react-router-dom'
import Tilt from '../Tilt'
import images from '../../assets/images/iphonex.png'

const ProductCard = ({ progress, title, image }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-grid">
            <Tilt className="product-card" options={{ speed: 1500, scale: 1.03, max: 15 }}>
                <NavLink to="/product/blahblah">
                    <div className="grid">
                        <div className="title">
                            <h3>{title}</h3>
                        </div>
                        <div className="image">
                            <img src={images} />
                        </div>
                        <div className="progress-wrapper">
                            <div className="progress">
                                <div style={{ width: progress + '%' }}></div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </Tilt>
        </div>
    )
}

export default ProductCard
