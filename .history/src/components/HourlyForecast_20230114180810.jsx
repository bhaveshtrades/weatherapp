import React from 'react'

function HourlyForecast({timeProp, iconProp, tempProp}){
  return(
    <div className='w-12 h-32'>
      <p className='text-center'>{timeProp}</p>
      <img src={`${iconProp}`} alt='This is a weather icon'/>
      <p className='text-center'>{tempProp}</p>
    </div>
  )
}

export default HourlyForecast;
