import React from 'react'
import styled from '@emotion/styled';

const Icon = ({condition}) => {

    const Icon = styled.img`
    width: 30%;
    height: 22%;
    margin-bottom:0;
    margin-top:-1vh;
    @media(max-width: 700px){
        margin-top: -2vh;
    }
    `;

    var icon = '';
    switch(condition){
    case "Clear":
        icon = `./img/clear.png`;
    break;
    case "Clouds":
        icon = `./img/clouds.png`;
    break;
    case "Drizzle":
        icon = `./img/drizzle.png`;
    break;
    case "Mist":
        icon = `./img/mist.png`;
    break;
    case "Rain":
        icon = `./img/rain.png`;
    break;
    case "Snow":
        icon = `./img/snow.png`;
    break;
    case "Haze":
        icon = `./img/haze.png`;
    break;
    case "Thunderstorm":
        icon = `./img/thunder.png`;
    break;
    case "Windy":
        icon = `./img/windy.png`;
    break;
    default:
        break;
}

    return(
        <Icon src={icon}
        alt="Weather Icon"/>
    )
}
export default Icon;