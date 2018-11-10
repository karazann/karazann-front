import React, { Component } from 'react'

class BodyColor extends Component {

	componentDidMount() {
		document.body.classList.toggle('blue-background', this.props.isBlue)
	}

	componentWillReceiveProps(props) {
		document.body.classList.toggle('blue-background', props.isBlue)
	}

	componentWillUnmount() {
		document.body.classList.remove('blue-background')
	}
	
	render() {
		return this.props.children
	}
}

export default BodyColor;