import React, { Children, Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const GridWrap = styled.div`
    width: ${props => (props.count * (props.itemWidth - 1))}px;
    max-width: ${props => props.maxWidth}px;
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`

const GridItem = styled.div`
    flex-basis: ${props => props.itemWidth - 1}px;
    align-content: start;
    padding: 20px;
`

class ResponsiveGrid extends Component {

    state = {
        count: 0
    }

    refCallback = element => {
        if (element) {
            this.elementRef = element
        }
    }

    calcCount() {
        const count = Math.floor(this.elementRef.getBoundingClientRect().width / this.props.itemWidth)
        if (count != this.state.count) {
            this.setState({
                count: count
            })
        }
    }

    componentDidMount() {
        this.calcCount()
        window.addEventListener("resize", () => { this.calcCount() })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => { this.calcCount() })
    }

    render() {
        const { maxWidth, itemWidth, header, children } = this.props

        const childrens = Children.map(children, (child, index) => {
            return (<GridItem itemWidth={itemWidth}>{child}</GridItem>)
        })

        return (
            <Container ref={this.refCallback}>
                <GridWrap maxWidth={maxWidth} itemWidth={itemWidth} count={this.state.count}>
                    {header}
                    <Grid >
                        {childrens}
                    </Grid>
                </GridWrap>
            </Container>
        )
    }
}

export default ResponsiveGrid
