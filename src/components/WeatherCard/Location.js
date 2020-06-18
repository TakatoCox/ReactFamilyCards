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
@media(max-width: 700px){
        font-size:1.2rem;
    }
`

const Country = styled.h3`
font-family: 'Fira Sans', sans-serif;
font-size: 1.1rem;
margin-top: 1vh;
margin-left:1vh;
@media(max-width: 700px){
        font-size:0.9rem;
    }
`

    return(
<Container>        
    <City>{city}</City>
    <Country>{country}</Country>
</Container>
    );
}
export default Location;