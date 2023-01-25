import React, { useState } from 'react';
import './App.css';
import Current_weather from './components/Current_weather';
import Navbar from './components/Navbar';

function App() {

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    let weatherData = [];

    let currentDate;

    let currentDay;
  
    const getWeather =(e)=>{
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then((response)=>{
        weatherData.push(response);
        currentDate = new Date(`${weatherData[0].current.last_updated}`);
        currentDay = currentDate.getDay;
      });
    }

  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    <Current_weather locationProp={weatherData[0].location.name} dayProp={} dateProp={weatherData.current.}/>
    </>
  );
}

export default App;
