import React from 'react'
import { NavLink } from 'react-router-dom'
import Tilt from '../Tilt'

const ProductCard = ({ progress, title, image }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <a href="#">
                <div className="card-outer">
                    <Tilt className="card-inner card" options={{ speed: 1500, scale: 1.05, max: 30 }}>

                        <h4>{title}</h4>

                        <div className="image">
                            <img src={image} />
                        </div>

                        <div className="goal">
                            <div style={{ width: progress + '%' }}></div>
                        </div>

                        <NavLink to="/product/blahblah" className="button">$1200</NavLink>

                    </Tilt>
                </div>
            </a>
        </div>
    )
}

export default ProductCard
