import React from 'react'
import styled from '@emotion/styled';

const Condition = ({temp, condition}) => {
    let tempColor = "cyan";
    if(temp<=10){
        tempColor = "yellow"
    }

    const Temp = styled.h1`
    font-family: 'Fira Sans', sans-serif;
    font-size: 2rem;
    font-weight: 200;
    margin-top: -3vh;
    margin-bottom:0;
    color: ${tempColor};
    
    `
    const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
    margin-top:-2vh;
    padding-top:0vh;
    padding-bottom:30px;
    color:white;
    `

    return(
        <>
            <Temp>{temp} °C</Temp>
            <State>{condition}</State>
        </>
    );
}

export default Condition;