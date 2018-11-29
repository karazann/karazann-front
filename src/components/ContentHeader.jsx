import React from 'react'

const ContentHeader = ({ img, title }) => {
    return (
        <div className='header'>
            <div>
                <img src={img} />
            </div>
            <h2>{title}</h2>
        </div>
    )
}

export default ContentHeader