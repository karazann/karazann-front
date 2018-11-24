import React, { Component, Fragment } from 'react'

class BodyColor extends Component {

	componentDidMount() {
		document.body.classList.toggle('blue-background', this.props.isBlue)
		document.body.classList.toggle('error', this.props.error)
	}

	componentWillReceiveProps(props) {
		document.body.classList.toggle('blue-background', props.isBlue)
		document.body.classList.toggle('error', props.error)
	}

	componentWillUnmount() {
		document.body.classList.remove('blue-background')
		document.body.classList.remove('error')
	}

	render() {
		return (
			<Fragment>
				<div className='alert hidden'>{this.props.error ? this.props.error.messange : ''}</div>
				{this.props.children}
			</Fragment>
		)
	}
}

export default BodyColor