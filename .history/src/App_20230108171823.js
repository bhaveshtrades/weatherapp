import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Navbar from './components/Navbar';

function App() {

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
    const[weatherData, setWeatherData] = useState([]);
    const[location, setLocation] = useState();
    const[currentDate, setCurrentDate] = useState();
    const[currentDay, setCurrentDay] = useState();
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

     const getWeather = (e)=>{
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then((response)=>{
        setWeatherData([response]);
      });
    }

    console.log(weatherData)

    setLocation(weatherData[0].location.name);
    setCurrentDate(new Date(`${weatherData[0].current.last_updated}`).getDate());
    setCurrentDay(new Date(`${weatherData[0].current.last_updated}`).getDay());

  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    {weatherData.length !==0 && <CurrentWeather locationProp={location} dayProp={currentDay} dateProp={currentDate}/>}
    </>
  );
}

export default App;
