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



import HeroCard from './HeroCard';

import note from '../assets/images/note.png'

class Header extends PureComponent {
    render() {
        return (
            <section className="main">
                <section className="container">

                    <div className="space-40"></div>

                    <h2>Popular</h2>   

                    <div className="space-90"></div>

                    <div className="row">
                        <HeroCard image={note} />
                        <HeroCard />
                    </div>
            
                </section>
                <section className="container">

                    <div className="space-60"></div>

                    <h2>Products</h2>

                    <div className="space-30"></div>

                    <div className="row">

                        <ItemCard title="Iphone X" image={iphone} />
                        <ItemCard title="Xbox One X" image={xbox} />
                        <ItemCard title="Apple Watch S4" image={watch} />
                        <ItemCard title="Huawei P20 Lite" image={huawei} />
                        <ItemCard title="PS4 Pro" image={ps4} />
                        <ItemCard title="Apple Airpods" image={airpods} />
                        <ItemCard title="3 Month Xbox Live" image={live} />
                    </div>
                </section>
            </section>
        )
    }
}

export default Header;