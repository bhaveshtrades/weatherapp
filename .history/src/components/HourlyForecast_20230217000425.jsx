import React from 'react'

function HourlyForecast({timeProp, iconProp, tempProp}){
  return(
    <div className='hourlyForecastItem w-18'>
      <p className='text-center text-sm'>{timeProp}</p>
      <img src={`${iconProp}`} alt='This is a weather icon' className='w-8 h-8'/>
      <p className='text-center text-sm'>{tempProp}</p>
    </div>
  )
}

export default HourlyForecast;
