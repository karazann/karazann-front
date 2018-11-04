import React, { PureComponent } from 'react'
import { isMobile } from 'react-device-detect'
import VanillaTilt from 'vanilla-tilt'

import '../scss/style.scss'

class HeroCard extends PureComponent {
    
    constructor(props) {
        super(props)
        this.tiltRef = React.createRef()
    }

    componentDidMount() {
        if (window.innerWidth > 576 && !isMobile ) {
            VanillaTilt.init(this.tiltRef.current, { speed: 1500, scale: 1.03, max: 10})
        }
        
    }

    onClick(e) {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
    }
    
    render() {
        return (
            <div className="col-12 col-lg-6">
                <div ref={this.tiltRef} className="hero-card">
                    <span className="tag">New</span>
                    <img src={this.props.image} alt=""/>
                    <h3>Galaxy Note 9</h3>
                    <p>The Galaxy Note9. Innovative features and design make it the only phone to keep up with the next genreation of achivers.</p>
                    
                    <a href="#" onClick={this.onClick} >Details</a>
                </div>
            </div>
        )
    }
}

export default HeroCard