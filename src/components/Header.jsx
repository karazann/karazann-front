import React, { PureComponent } from 'react'
import '../scss/style.scss'

import ItemCard from './ItemCard'

import iphone from '../assets/images/iphonex.png'
import xbox from '../assets/images/xboxx.png'
import watch from '../assets/images/awatch.png'
import ps4 from '../assets/images/ps4.png'
import huawei from '../assets/images/huawei.png'
import airpods from '../assets/images/airpods.png'
import live from '../assets/images/xboxlive.png'

import { results } from './data.json'

import HeroCard from './HeroCard';

import note from '../assets/images/note.png'

class Header extends PureComponent {

    render() {
        return (
            <section className="main">
                <section className="container">

                    <div className="space-40"></div>

                    <h2>Highlights</h2>

                    <div className="space-90"></div>

                    <div className="row">
                        <HeroCard image={xbox} />
                        <HeroCard image={iphone}/>
                    </div>

                </section>
                <section className="container">

                    <div className="space-60"></div>

                    <h2>Products</h2>

                    <div className="space-30"></div>

                    <div className="row">
                        {results.map((item =>
                            <ItemCard title={item.title} image={item.image} progress={item.progress}/>
                        ))}
                    </div>
                </section>
            </section>
        )
    }
}

export default Header;