import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Navbar from './components/Navbar';

function App() {

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    let weatherData = [];
    let location;
    let fullDate;
    let currentDate;
    let currentDay;
  
     function getWeather(e){
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then((response)=>{
        weatherData.push(response);
        location = weatherData[0].location.name
        fullDate = new Date(`${weatherData[0].current.last_updated}`);
        currentDay = fullDate.getDay();
        currentDate = fullDate.getDate();
      });
    }

    console.log(location, fullDate, currentDay, currentDate);

  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    <CurrentWeather locationProp={location} dayProp={currentDay} dateProp={currentDate}/>
    </>
  );
}

export default App;
