import React from 'react'
import styled from '@emotion/styled';

import Location from './Location'
import Condition from './Condition'
import Icon from './Icon'
import Time from './Time';
import "./Clock.css"

const WeatherCard= ({temp, condition, city, country, timeZone, name}) => {
    

    let highColor = 0;
    let lowColor = 0;
    let bg = null;
    if(temp > 10){ //hot weather
    highColor = (1-(temp-10)/28)*255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top, 
        rgba(255,${highColor},0), 
        rgba(200,${lowColor},0)
        )`;
    } else if (temp <= 10){ //cold weather
        highColor = (1-(temp+20)/32)*255;
        lowColor= highColor - 150;
        bg = `linear-gradient(to top, 
            rgba(0,${highColor},255), 
            rgba(0,${lowColor},255)
            )`;
    }
    const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 280px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    margin-top:10px;
    margin-bottom:10px;
    `
    const Title = styled.div`
    border-style: solid;
    color: black;
    width:200px;
    text-align: center;
    font-size:3vh;
    font-weight: bold;
    font-family: Times New Roman;
    background: linear-gradient(to left,white,deepskyblue,white,deepskyblue);
    border-radius:30px;
    margin-top:2px;
    `

    return (
        <div className="cardTime">
        <Card>
            <Title>{name}</Title>
            <Location city = {city} country={country}/>
             <Icon condition = {condition}/>
            <Condition temp={temp} condition={condition}/>
        </Card>
        <Time timeZone={timeZone}/>
        </div>
    );
}
export default WeatherCard;