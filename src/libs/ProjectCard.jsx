import React from 'react'
import styled from 'styled-components'

import test from '../assets/images/cola.png'

const Card = styled.article`
    width: 100%;
    border-radius: 10px;
    font-family: 'Open Sans', sans-serif;
    background: ${props => props.theme.primaryColor};
    height: 320px;
    box-shadow: 0 7px 20px 0 rgba(49, 49, 80, 0.10), 0 2px 20px 0 rgba(0, 0, 0, 0.03);
`

const Head = styled.div`
    width: 100%;
    text-align: center;
    padding: 30px 50px;

    img {
        height: 100px;
        width: 100%;
        
        border-radius: 5px;
    }

    p {
        margin-top: 10px;
    }

`

const ProjectCard = () => {
    return (
        <Card>
            <Head>
                <img src={test} alt=""/>
                <p>CocaCola</p>
                <a></a>
            </Head>
        </Card>
    )
}

export default ProjectCard