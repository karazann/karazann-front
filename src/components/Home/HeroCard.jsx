import React from 'react'
import Tilt from '../Tilt'

const HeroCard = ({image}) => {

    return (
        <div className="col-12 col-lg-6">
            <Tilt className="hero-card" options={{ speed: 1500, scale: 1.03, max: 10 }} >

                <span className="tag">New</span>

                <img src={image} alt="" />

                <h3>Galaxy Note 9</h3>

                <p>The Galaxy Note9. Innovative features and design make it the only
                         phone to keep up with the next genreation of achivers.</p>

                <a href="#" onClick={(e) => e.preventDefault()} >Details</a>

            </Tilt>
        </div>
    )

}

export default HeroCard
