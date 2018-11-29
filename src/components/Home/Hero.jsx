import React, { Fragment } from 'react'
import HeroCard from './HeroCard'
import ContentHeader from '../ContentHeader'

/**Placeholders**/
import note from '../../assets/images/airpods.png'
import xbox from '../../assets/images/xboxx.png'

const Hero = () => {
    const tags = [{color: 'green', name: 'New'}, {color: 'yellow', name: 'Popular'}]
    return (
        <Fragment>
            <ContentHeader title='Popular' img='/star.svg' />
            <div className="row">
                <HeroCard imageUrl={xbox} title='Xbox One X' description="All games look and play great on Xbox One X, but games that have earned the Xbox One X Enhanced logo have been updated or built specifically." tags={tags}/>
                <HeroCard imageUrl={note} title='Apple Airpods' description='Just take them out and they’re ready to use with all your devices. Put them in your ears and they connect instantly. Speak into them and your voice sounds clear. ' tags={tags}/>
            </div>
        </Fragment>
    )
}

export default Hero