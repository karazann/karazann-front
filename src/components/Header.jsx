import React, { PureComponent } from 'react'
import '../scss/style.scss'
import ItemCard from './ItemCard'
import iphone from '../assets/images/iphonex.png'
import xbox from '../assets/images/xboxx.png'
import watch from '../assets/images/awatch.png'
import ps4 from '../assets/images/ps4.png'
import huawei from '../assets/images/huawei.png'

class Header extends PureComponent {
    render() {
        return (
            <section className="main">
                <section className="container">
                    
                    <div className="space-40"></div>
                    
                    <h2>Products</h2>
                    
                    <div className="space-30"></div>
                    
                    <div className="row">

                    <ItemCard title="Iphone X" image={iphone}/>
                    <ItemCard title="Xbox One X" image={xbox}/>
                    <ItemCard title="Apple Watch S4" image={watch}/>
                    <ItemCard title="Huawei P20 Lite" image={huawei}/>
                    <ItemCard title="PS4 Pro" image={ps4}/>
                    </div>
                </section>
            </section>
        )
    }
}

export default Header;