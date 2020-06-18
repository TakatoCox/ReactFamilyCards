import React from 'react';
import './App.css';
import WeatherEngine from './components/WeatherEngine';


function App() {
  return (
    <div className="App">
        <div className="one">
        <WeatherEngine location="Tokyo" name ="Kaede"/>
        <WeatherEngine location="Calgary" name ="Kiyono"/>
        <WeatherEngine location="Redondo Beach" name ="Gary"/>

        <WeatherEngine location="Vancouver" name ="Tak"/>
        <WeatherEngine location="Santa Cruz, US" name ="Hiro"/>
        <WeatherEngine location="Yachio" name ="Yasuko"/>
 
        <WeatherEngine location="Yachio" name ="Kei"/>
        <WeatherEngine location="Yachio" name ="Atsushi K."/>
        <WeatherEngine location="Saitama, jp" name ="Yuko"/>
        <WeatherEngine location="Tottori, jp" name ="Atsushi T."/>

        <WeatherEngine location="Ottawa" name ="Erin"/>
        <WeatherEngine location="Seattle" name ="Taylor"/>
        <WeatherEngine location="Regina, ca" name ="Brandon"/>

        <WeatherEngine location="Winnipeg" name ="Les"/>
        <WeatherEngine location="Winnipeg" name ="Tim"/>
        <WeatherEngine location="Winnipeg" name ="Corrine"/>
        <WeatherEngine location="Winnipeg" name ="Darian"/>
        <WeatherEngine location="Winnipeg" name ="Jordy"/>
        </div>
    </div>
  );
}

export default App;
