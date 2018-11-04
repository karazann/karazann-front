import React, { PureComponent } from 'react'
import { isMobile } from 'react-device-detect'
import VanillaTilt from 'vanilla-tilt'

import '../scss/style.scss'

class ItemCard extends PureComponent {

    constructor(props) {
        super(props)
        this.tiltRef = React.createRef()
    }

    componentDidMount() {
        if (window.innerWidth > 576 && !isMobile ) {
            VanillaTilt.init(this.tiltRef.current, { speed: 1500, scale: 1.05 , max: 30})
        }
    }

    onClick(e) {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
    }

    render() {
        const progress = this.props.progress;
        const title = this.props.title;
        const image = this.props.image;

        const style = {
          width: progress + '%'
        };

        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                <div className="card-outer">
                    <div ref={this.tiltRef} className="card-inner card">


                        <h4>{title}</h4>

                        <div className="image">
                            <img src={image} />
                        </div>

                        <div className="goal">
                        <div style={style}></div></div>

                        <a href="#" onClick={this.onClick} className="button">Check out ></a>
                    </div>
                </div>

            </div>
        )
    }
}


export default ItemCard
