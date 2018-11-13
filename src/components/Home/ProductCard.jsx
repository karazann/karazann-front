import React from 'react'
import Tilt from '../Tilt'
import '../../scss/style.scss'

const ProductCard = ({ progress, title, image }) => {

    const onClick = (event) => {
        event.preventDefault()
        event.nativeEvent.stopImmediatePropagation()
    }

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

                        <a href="#" onClick={onClick} className="button">$1200</a>

                    </Tilt>
                </div>
            </a>
        </div>
    )
}


export default ProductCard
