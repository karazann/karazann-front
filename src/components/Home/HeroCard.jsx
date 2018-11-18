import React from 'react'
import Tilt from '../Tilt'
import {NavLink} from 'react-router-dom'

const HeroCard = ({title, description, imageUrl, tags}) => {
    return (
        <div className="col-12 col-lg-6">
            <Tilt className="hero-card" options={{ speed: 1500, scale: 1.03, max: 10 }} >

                <div className="tags">
                    {tags.map((tag, index) => <span key={index} className={tag.color}>{tag.name}</span>)}
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
