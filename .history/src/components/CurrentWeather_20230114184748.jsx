import React, { useState } from 'react';
import DetailedWeather from './DetailedWeather';
import Navbar from './Navbar';
import HourlyForecast from './HourlyForecast';

function CurrentWeather(){

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
    const[weatherData, setWeatherData] = useState([]);
    const[hourlyData, setHourlyData] = useState([]);

    let api = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;


    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

     function getWeather(e){
      e.preventDefault();

      fetch(api).then(data => data.json())
      .then((response)=>{
        if(response.hasOwnProperty('location')){
        setWeatherData([response]);
        setHourlyData([response.forecast.forecastday[0].hour])
        console.log(hourlyData[0]);
        }else{
        setWeatherData([]);
        }
      });
     }

     function dailyForecasting(element, index){
      let correctTime;
      let timeUnit = 'AM';
        if(new Date(`${element.time}`).getHours() === 0){
          correctTime = 12;
        }else if(new Date(`${element.time}`).getHours() === 12){
          correctTime = new Date(`${element.time}`).getHours();
          timeUnit = 'PM';
        }else if(new Date(`${element.time}`).getHours() > 12){
          correctTime = new Date(`${element.time}`).getHours() - 12;
          timeUnit = 'PM';
        }else{
          correctTime = new Date(`${element.time}`).getHours();
        }
          return <HourlyForecast key={index} tempProp={element.temp_c} iconProp={element.condition.icon} timeProp={correctTime+timeUnit}/>
     }

  return(
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    {weatherData.length !==0 && 
    <div className='mt-16 pl-72'>
    <div>
    <h2>{weatherData[0].location.name}, {weatherData[0].location.country}</h2>
    <h4>{new Date(`${weatherData[0].current.last_updated}`).getDate()} {months[new Date(`${weatherData[0].current.last_updated}`).getMonth()]}, {weekDays[new Date(`${weatherData[0].current.last_updated}`).getDay()]}</h4>
    </div>
    <div className='flex gap-x-72 pt-12 pl-12'> 
    <div className='flex gap-x-10 pt-6'>
    <div>
    <img src={`${weatherData[0].current.condition.icon}`} alt='This is a weather Icon'/>
    </div>
    <div>
    <h2>{weatherData[0].current.temp_c}<span>&#176;</span></h2>
    <h4>{weatherData[0].current.condition.text}</h4>
    </div>
    </div>
    <DetailedWeather maxTempProp={weatherData[0].forecast.forecastday[0].day.maxtemp_c} minTempProp={weatherData[0].forecast.forecastday[0].day.mintemp_c} sunriseProp={weatherData[0].forecast.forecastday[0].astro.sunrise} sunsetProp={weatherData[0].forecast.forecastday[0].astro.sunset} windSpeedProp={weatherData[0].current.wind_kph} rainChanceProp={weatherData[0].forecast.forecastday[0].day.daily_chance_of_rain}/>
    </div>
    </div>
    }
    {hourlyData.length !== 0 && <div className='mt-4 ml-52 w-3/4 h-1/6 overflow-x-scroll'>
    <div>
    <h3>Today's Weather</h3>
    </div>
    <div className='flex gap-x-12 pl-4 pt-2'>
    {hourlyData[0].map(dailyForecasting)}
    </div>
    </div>}
    </>
  )
}

export default CurrentWeather;
