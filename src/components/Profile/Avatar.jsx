import React from 'react'

import {
    Avatar,
    Icon,
    Status,
    Details,
    Paragraph,
    Paragraph2
} from './style'

const AvatarComponent = ({className, extended, image, name, status, location }) => {
    return (
        <Avatar className={className} extended={extended}>
            {image ? <Icon extended={extended} src={image} /> : <Icon as='div'><p>{name.charAt(0).toUpperCase()}</p></Icon>}
            {status && <Status extended={extended} status={status} ></Status>}
            <Details>
                {name && <Paragraph extended={extended}>{name}</Paragraph>}
                {location && <Paragraph2 extended={extended}>{location}</Paragraph2>}
            </Details>
        </Avatar>
    )
}

export default AvatarComponent