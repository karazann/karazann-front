import React, { Component, Fragment } from 'react'

class Body extends Component {

	componentDidMount() {
		document.body.setAttribute('theme', this.props.dark ? 'dark': 'light')
		document.body.classList.toggle('error', this.props.error)
	}

	componentWillReceiveProps(props) {
		document.body.setAttribute('theme', props.dark ? 'dark': 'light')
		document.body.classList.toggle('error', props.error)
	}

	componentWillUnmount() {
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

export default Body