import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

function getCount(ref) {
    const count = ref ? Math.floor(ref.offsetWidth / 300) : 1
    return count == 0 ? 1 : count
}

const StyledHome = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 60px 0 30px 0;
    flex: 1 0 0;
`

const Wrapper = styled.div`
    width: ${props => (props.count * 299)}px;
    max-width: 1500px;
    display: flex;
    flex-wrap: wrap;
    align-content: start;
`

const Col = styled.article`
    flex-basis: 299px;
    align-content: start;
    padding: 20px;
    
    div {
        width: 100%;
        height: 360px;
        background: ${props => props.theme.primaryColor};
        border-radius: 7px;
    }
`
/*
<div className='spinner' >
                    <img src={logo} alt="karazann-logo" />
                    <img src={logo} alt="karazann-logo" />
                </div>
*/

class Home extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef()
    }

    componentDidMount() {
        window.addEventListener("resize", () => { this.forceUpdate() })
        this.forceUpdate()
    }
    componentWillUnmount() {
        window.removeEventListener("resize", () => { this.forceUpdate() })
    }

    render() {
        return (
            <StyledHome ref={this.ref}>
                <Wrapper count={getCount(this.ref.current)}>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                </Wrapper>
            </StyledHome>
        )
    }
}

const mapStateToProps = state => {
    return {
 
    }
}

export default connect(null)(Home)