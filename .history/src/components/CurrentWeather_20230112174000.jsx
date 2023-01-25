import React, {useEffect, useState} from 'react';
import DetailedWeather from './DetailedWeather';
import Navbar from './Navbar';

function CurrentWeather(){

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
    const[weatherData, setWeatherData] = useState([]);
    const[country, setCountry] = useState();
    const[location, setLocation] = useState();
    const[currentDate, setCurrentDate] = useState();
    const[currentDay, setCurrentDay] = useState();
    const[currentMonth, setCurrentMonth] = useState();
    const[currentIcon, setCurrentIcon] = useState();
    const[currentTemp, setCurrentTemp] = useState();
    const[currentStatus, setCurrentStatus] = useState();
    const[hourlyData, setHourlyData] = useState();

    const[maxTemp, setMaxTemp] = useState();
    const[minTemp, setMinTemp] = useState();
    const[windSpeed, setWindSpeed] = useState();
    const[sunsetTime, setSunsetTime] = useState();
    const[sunriseTime, setSunriseTime] = useState();
    const[rainChance, setRainChance] = useState([]);

    let api = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;


    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

     function getWeather(e){
      e.preventDefault();

      fetch(api).then(data => data.json())
      .then((response)=>{
        if(response.hasOwnProperty('location')){
        setWeatherData([response]);
        setHourlyData([response.forecast.forecastday[0].hour]);
        }else{
        setWeatherData([]);
        }
      });
    }


    useEffect(()=>{
      if(weatherData.length !==0){
        setCountry(weatherData[0].location.country);
        setLocation(weatherData[0].location.name);
        setCurrentDate(new Date(`${weatherData[0].current.last_updated}`).getDate());
        setCurrentDay(new Date(`${weatherData[0].current.last_updated}`).getDay());
        setCurrentMonth(new Date(`${weatherData[0].current.last_updated}`).getMonth());
        setCurrentIcon(weatherData[0].current.condition.icon);
        setCurrentTemp(weatherData[0].current.temp_c);
        setCurrentStatus(weatherData[0].current.condition.text);
        setMaxTemp(weatherData[0].forecast.forecastday[0].day.maxtemp_c);
        setMinTemp(weatherData[0].forecast.forecastday[0].day.mintemp_c);
        setWindSpeed(weatherData[0].current.wind_kph);
        setSunriseTime(weatherData[0].forecast.forecastday[0].astro.sunrise);
        setSunsetTime(weatherData[0].forecast.forecastday[0].astro.sunset);
        setRainChance(weatherData[0].forecast.forecastday[0].day.daily_chance_of_rain);
      }
    }, [weatherData]);

  return(
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    {weatherData.length !==0 && 
    <div className='mt-16 pl-72'>
    <div>
    <h2>{location}, {country}</h2>
    <h4>{currentDate} {months[currentMonth]}, {weekDays[currentDay]}</h4>
    </div>
    <div className='flex gap-x-72 pt-12 pl-12'> 
    <div className='flex gap-x-10 pt-6'>
    <div>
    <img src={`${currentIcon}`} alt='This is a weather Icon'/>
    </div>
    <div>
    <h2>{currentTemp}<span>&#176;</span></h2>
    <h4>{currentStatus}</h4>
    </div>
    </div>
    <DetailedWeather maxTempProp={maxTemp} minTempProp={minTemp} sunriseProp={sunriseTime} sunsetProp={sunsetTime} windSpeedProp={windSpeed} rainChanceProp={rainChance}/>
    </div>
    </div>}
    </>
  )
}

export default CurrentWeather;
