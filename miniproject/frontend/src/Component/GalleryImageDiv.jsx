import React from 'react'
import styled from '@emotion/styled';
import { Heading } from '@chakra-ui/react'
const GalleryImageDiv = ({ img, ocation, loaction, clickBy }) => {
    return (
        <DIV>
        <img src={img} alt={ocation} />
        <br />
        <Heading as='h5' size='sm'>{ocation}</Heading>
        <Heading as='h5' size='sm'>{loaction}</Heading>
        <Heading as='h5' size='sm'>{`Clicked By : ${clickBy}`}</Heading>
        </DIV>
    )
}

export default GalleryImageDiv

const DIV = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
width: 400px;
height: 500px;
margin: auto;
padding: 20px;
:hover{
    border: 1px solid white;
}
img{
    margin: auto;
    height: 350px;
    width: 500px;
}
@media (max-width: 576px){
    width: 200px;
    height: 400px;
    margin: auto;
    padding: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    img{
    margin: auto;
    height: 150px;
    width: 200px;
}
}
`