import React from 'react'
import Tilt from '../Tilt'
import {NavLink} from 'react-router-dom'

const HeroCard = ({title, description, imageUrl, tags}) => {
    return (
        <div className="col-12 col-lg-6 d-grid">
            <Tilt className="hero-card" options={{ speed: 1500, scale: 1.00, max: 10, perspective: 1500 }} >

                <div className="tags">
                    {tags.map((tag, index) => <div key={index} className={'tag ' + tag.color}>{tag.name}</div>)}
                </div>
                
                <div className="content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="button">
                    <NavLink to='/product/1234'>Details</NavLink>
                </div>
                
                <div className="image">
                    <img src={imageUrl} alt="todo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default HeroCard
