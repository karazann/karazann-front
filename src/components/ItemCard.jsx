import React, { PureComponent } from 'react'
import Tilt from './Tilt'
import '../scss/style.scss'

class ItemCard extends PureComponent {

    onClick(e) {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
    }

    render() {
        const progress = this.props.progress;
        const title = this.props.title;
        const image = this.props.image;

        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">

                <div className="card-outer">
                    <Tilt className="card-inner card" options={{ speed: 1500, scale: 1.05, max: 30 }}>

                        <h4>{title}</h4>

                        <div className="image">
                            <img src={image} />
                        </div>

                        <div className="goal">
                            <div style={{width: progress + '%'}}></div>
                        </div>

                        <a href="#" onClick={this.onClick} className="button">Check out ></a>

                    </Tilt>
                </div>

            </div>
        )
    }
}


export default ItemCard
