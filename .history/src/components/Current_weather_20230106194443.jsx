import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { useState } from 'react';

function Current_weather() {

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    const getWeather =(e)=>{
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then(response => console.log(response));
    }

  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    </>
  )
}

export default Current_weather;
