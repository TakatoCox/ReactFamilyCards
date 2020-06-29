import React, {useState, useEffect} from 'react';
import WeatherCard from './WeatherCard/component';


const WeatherEngine = ({location, name}) => {

const[weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
    timeZone: null
});

const getWeather = async(q)=>{

  const apiRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=62a9294025f4bd4ff8dee879a50f9b58&units=metric`
   );
   const resJSON = await apiRes.json();

   setWeather({
     temp: resJSON.main.temp,
     city: resJSON.name,
     condition: resJSON.weather[0].main,
     country: resJSON.sys.country,
     timeZone: resJSON.timezone
   });
  }

useEffect(()=>{
  getWeather(location);
} ,[location]);



  return (
    <div>
      <WeatherCard 
          name={name}
          temp={weather.temp} 
          condition = {weather.condition} 
          city={weather.city} 
          country={weather.country}
          timeZone={weather.timeZone}
          />
    </div>
  )
}

export default WeatherEngine;
