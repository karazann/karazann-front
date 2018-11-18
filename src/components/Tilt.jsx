import React, { PureComponent } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { isMobile } from 'react-device-detect'

class Tilt extends PureComponent {
    
    constructor(props) {
        super(props)
        this.tiltElement = React.createRef()
    }

    componentDidMount() {
        if (window.innerWidth > 576 && !isMobile ) {
            VanillaTilt.init(this.tiltElement.current, this.props.options)
        }
    }

    render() {
        return (
            <div className={this.props.className} ref={this.tiltElement}>
                {this.props.children}
            </div>
        )
    }
}

export default Tilt
