import React, { PureComponent } from 'react'

class Tilt extends PureComponent {
    
    constructor(props) {
        super(props)
        this.tiltElement = React.createRef()
    }

    componentDidMount() {
        
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
