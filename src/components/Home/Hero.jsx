import React, { Fragment } from 'react'
import HeroCard from './HeroCard'

/**Placeholders**/
import note from '../../assets/images/airpods.png'
import xbox from '../../assets/images/xboxx.png'

const Hero = () => {
    const tags = [{color: 'green', name: 'New'}, {color: 'yellow', name: 'Popular'}]
    return (
        <Fragment>
            <div className='header-2'>
                <div><svg xmlns="http://www.w3.org/2000/svg" overflow='visible' strokeWidth='3' width="20" height="20" viewBox="0 0 24 24"><path strokeLinejoin="round" fill="white"  stroke="white"  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg></div>
                <h2>Popular</h2>
            </div>
            <div className="row">
                <HeroCard imageUrl={xbox} title='Xbox One X' description="All games look and play great on Xbox One X, but games that have earned the Xbox One X Enhanced logo have been updated or built specifically." tags={tags}/>
                <HeroCard imageUrl={note} title='Apple Airpods' description='Just take them out and they’re ready to use with all your devices. Put them in your ears and they connect instantly. Speak into them and your voice sounds clear. ' tags={tags}/>
            </div>
        </Fragment>
    )
}

export default Hero