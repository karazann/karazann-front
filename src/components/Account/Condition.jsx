import React, { Fragment } from 'react'

const Condition = ({is, children}) => {
    if(is)
        return null
    
    return (
        <Fragment>
            {children}     
        </Fragment>
    )
}

export default Condition