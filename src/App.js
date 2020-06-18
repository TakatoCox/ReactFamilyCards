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
        </div>
        <div className="one"> 
        <WeatherEngine location="Vancouver" name ="Tak"/>
        <WeatherEngine location="Santa Cruz, US" name ="Hiro"/>
        <WeatherEngine location="Yachio" name ="Yasuko"/>
        </div>
        <div className="one"> 
        <WeatherEngine location="Tottori, jp" name ="Kei"/>
        <WeatherEngine location="Yachio" name ="Atsushi"/>
        <WeatherEngine location="Saitama, jp" name ="Yuko"/>
        </div>
        <div className="one"> 
        <WeatherEngine location="Winnipeg" name ="Les"/>
        <WeatherEngine location="Seattle" name ="Taylor"/>
        <WeatherEngine location="Regina, ca" name ="Brandon"/>
        </div>
    </div>
  );
}

export default App;
