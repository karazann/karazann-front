import React, { PureComponent } from 'react'
import '../scss/style.scss'

import VanillaTilt from 'vanilla-tilt'

class ItemCard extends PureComponent {

    constructor(props) {
        super(props)
        this.tiltRef = React.createRef()
    }

    componentDidMount() {
        VanillaTilt.init(this.tiltRef.current, {speed: 1500, scale: 1.05})
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                
                    <div ref={this.tiltRef} className="card-outer">
                        <div className="card-inner card">

                            <h4>{this.props.title}</h4>

                            <div className="image">
                                <img src={this.props.image} alt="" />
                            </div>


                            <a href="#" className="button">View details</a>
                        </div>
                    </div>
                
            </div>
        )
    }
}


export default ItemCard
