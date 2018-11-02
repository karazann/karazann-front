import React, { PureComponent } from 'react'
import VanillaTilt from 'vanilla-tilt'

class SearchBar extends PureComponent {
    
    constructor(props) {
        super(props)
        this.tiltRef = React.createRef()
    }

    componentDidMount() {
        VanillaTilt.init(this.tiltRef.current, {speed: 1000, scale: 1.05, axis: 'y', reverse: true})
    }
    
    render() {
        return (
            <div ref={this.tiltRef} className="search">
                <a href="#">Search</a>
            </div>
        )
    }
}

export default SearchBar;