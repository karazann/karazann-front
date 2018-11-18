import React, { Fragment } from 'react'
import HeroCard from './HeroCard'

/**Placeholders**/
import note from '../../assets/images/note.png'
import xbox from '../../assets/images/xboxx.png'

const Hero = () => {
    const tags = [{color: 'green', name: 'New'}, {color: 'orange', name: 'Popular'}]
    return (
        <Fragment>
            <h2 className='header'>Featured</h2>
            <div className="row">
                <HeroCard imageUrl={xbox} title='Xbox One X' description="All games look and play great on Xbox One X, but games that have earned the Xbox One X Enhanced logo have been updated or built specifically to take full advantage of the world's most powerful console." tags={tags}/>
                <HeroCard imageUrl={note} title='Galaxy Note 9' description='fasdff' tags={tags}/>
            </div>
        </Fragment>
    )
}

export default Hero