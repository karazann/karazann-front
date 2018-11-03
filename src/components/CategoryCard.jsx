import React, { PureComponent } from 'react'
import VanillaTilt from 'vanilla-tilt'

class CategoryCard extends PureComponent {

    constructor(props) {
        super(props)
        this.tiltRef = React.createRef()
    }

    componentDidMount() {
        VanillaTilt.init(this.tiltRef.current, { speed: 1500, scale: 1.05, axis: 'x'})
    }

    render() {
        return (
            <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                <div ref={this.tiltRef} class="category-card">
                    <img width="50px" src={this.props.image} alt="" />
                    <h5>{this.props.name}</h5>
                </div>
            </div>
        )
    }
}

export default CategoryCard
