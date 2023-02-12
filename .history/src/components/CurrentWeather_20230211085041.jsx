import React, { useEffect, useState } from 'react';
import DetailedWeather from './DetailedWeather';
import Navbar from './Navbar';
import HourlyForecast from './HourlyForecast';
import Loading from './Loading';

function CurrentWeather(){

   const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
    const[lat, setLat] = useState();
    const[long, setLong] = useState();
    const[weatherData, setWeatherData] = useState([]);
    const[hourlyData, setHourlyData] = useState([]);
    const[loading, setLoading] = useState();
    
    let currentLocationAPI = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${long}&days=5`;
    
    function intialContent(){

      navigator.geolocation.getCurrentPosition((position)=>{
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        });
  

      setLoading(true);

        if(lat & long){
        fetch(currentLocationAPI).then(data => data.json())
        .then((response)=>{
        if(response.hasOwnProperty('location')){
        setWeatherData([response]);
        setHourlyData([response.forecast.forecastday[0].hour]);
        setLoading(false);
        }else{
        setWeatherData([]);
        setHourlyData([]);
        setLoading(false);
        }
        });
      }
    }

    useEffect(intialContent, [currentLocationAPI]);
    

    let api = `https://api.weatherapi.com/v1/forecast.json?key=${currentKey}&q=${city}`;

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

        function getWeather(e){
        e.preventDefault();
        setLoading(true);
        fetch(api).then(data => data.json())
        .then((response)=>{
        if(response.hasOwnProperty('location')){
        setWeatherData([response]);
        setHourlyData([response.forecast.forecastday[0].hour]);
        setLoading(false);
        }else{
        setWeatherData([]);
        setHourlyData([]);
        setLoading(false)
        }
        });
      }

     function forecastingData(element, index){
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

     function filteredForecasting(element){
      if(hourlyData[0].length !== 0){
      return new Date(`${element.time}`).getHours() >= new Date().getHours();
      }
    }


  return(
     <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{ setCity(e.target.value)}}/>
    {loading && <Loading/>}
    {weatherData.length !== 0 && loading !== true && <div className='mt-16 w-4/5 ml-8 h-72 currentWeatherDiv'>
    <h2 className='text-base pl-8 md:pl-16'>{weatherData[0].location.name}, {weatherData[0].location.country}</h2>
    <h4 className='text-sm pl-8 md:pl-16'>{new Date(`${weatherData[0].current.last_updated}`).getDate()} {months[new Date(`${weatherData[0].current.last_updated}`).getMonth()]}, {weekDays[new Date(`${weatherData[0].current.last_updated}`).getDay()]}</h4>
    <div> 
    <div className='flex gap-x-10 mt-4 pl-12 md:pl-24'>
    <img className='w-8 h-8' src={`${weatherData[0].current.condition.icon}`} alt='This is a weather Icon'/>
    <div className='w-24 h-16'>
    <h4 className='text-base'>{weatherData[0].current.temp_c}&#176;</h4>
    <h4 className='text-base'>{weatherData[0].current.condition.text}</h4>
    </div>
    </div>
    <div>
    <DetailedWeather maxTempProp={weatherData[0].forecast.forecastday[0].day.maxtemp_c} minTempProp={weatherData[0].forecast.forecastday[0].day.mintemp_c} sunriseProp={weatherData[0].forecast.forecastday[0].astro.sunrise} sunsetProp={weatherData[0].forecast.forecastday[0].astro.sunset} windSpeedProp={weatherData[0].current.wind_kph} rainChanceProp={weatherData[0].forecast.forecastday[0].day.daily_chance_of_rain}/>
    </div>
    </div>
    </div>}
    {weatherData.length !== 0 && loading!== true && <div className='w-4/5 ml-8 h-64 pl-8 forecastingDiv md:pl-16'>
    <div className='mt-4 w-3/4 h-56 overflow-auto'>
    <h3 className='mt-4 text-lg'>Today's Weather</h3>
    <div className='flex gap-x-12 mt-4 overflow-auto'>
    {hourlyData[0].filter(filteredForecasting).map(forecastingData)}
    </div>
    </div>
    </div>}
    </>
  )
}

export default CurrentWeather;
