import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Navbar from './components/Navbar';

function App() {

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
    const[weatherData, setWeatherData] = useState([]);
    // const[location, setLocation] = useState();
    const[currentDate, setCurrentDate] = useState();
    const[currentDay, setCurrentDay] = useState();
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

     const getWeather = (e)=>{
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then((response)=>{
        setWeatherData(response);
        // setLocation(weatherData[0].location.name)
        setCurrentDate(new Date(`${response.current.last_updated}`).getDate());
        setCurrentDay(new Date(`${response.current.last_updated}`).getDay());
      });
    }

    console.log(weatherData);

    //  if(weatherData.length !== 0){
    //     setLocation(weatherData[0].location.name)
    //     setCurrentDate(new Date(`${weatherData[0].current.last_updated}`).getDate());
    //     setCurrentDay(new Date(`${weatherData[0].current.last_updated}`).getDay());
    //  }    

  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    {weatherData.length !==0 && <CurrentWeather dayProp={currentDay} dateProp={currentDate}/>}
    </>
  );
}

export default App;
