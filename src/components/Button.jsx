import React, { PureComponent } from 'react'

class Button extends PureComponent {
    render() {
        return (
            <a href={this.props.link}>
                {this.props.children}
            </a>
        )
    }
}

export default Button
