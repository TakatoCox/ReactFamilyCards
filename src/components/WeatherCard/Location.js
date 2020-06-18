import React from 'react'
import styled from '@emotion/styled';


const Location = ({city, country}) => {

const Container = styled.div`
text-align: center;
display:flex;
flex-direction: row;
margin-top:-2vh;
`
const City = styled.h1`
font-family: 'Merriweather', sans-serif;
font-size: 1.6rem;
margin-bottom:0;
color:white;
`

const Country = styled.h3`
font-family: 'Fira Sans', sans-serif;
font-size: 1.1rem;
margin-top: 1vh;
margin-left:1vh;
`

    return(
<Container>        
    <City>{city}</City>
    <Country>{country}</Country>
</Container>
    );
}
export default Location;