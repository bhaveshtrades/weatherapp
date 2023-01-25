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
    const[currentMonth, setCurrentMonth] = useState();


    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

     const getWeather = (e)=>{
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then((response)=>{
        setWeatherData([response]);
        setLocation(response.location.name);
        setCurrentDate(new Date(`${response.current.last_updated}`).getDate());
        setCurrentDay(new Date(`${response.current.last_updated}`).getDay());
        setCurrentMonth(new Date(`${response.current.last_updated}`).getMonth());
      });
    }


  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    {weatherData.length !==0 && <CurrentWeather locationProp={location} dayProp={weekDays[currentDay]} dateProp={currentDate} monthProp={months[currentMonth]}/>}
    </>
  );
}

export default App;
