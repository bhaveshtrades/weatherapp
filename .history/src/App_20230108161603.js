import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Navbar from './components/Navbar';

function App() {

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
    const[weatherData, setWeatherData] = useState([]);
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

     const getWeather = (e)=>{
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then((response)=>{
        setWeatherData(response);
      });
    }

    console.log(weatherData);

    if(weatherData){
      let fullDate = new Date(`${weatherData[0].current.last_updated}`);
      let currentDate = fullDate.getDate();
      let currentDay = fullDate.getDay(); 
    }

  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    {weatherData && <CurrentWeather locationProp={weatherData[0].location.name} dayProp={currentDay} dateProp={currentDate}/>}
    </>
  );
}

export default App;
