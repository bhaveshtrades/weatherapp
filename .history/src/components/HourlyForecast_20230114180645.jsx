import React from 'react'

function HourlyForecast({timeProp, iconProp, tempProp}){
  return(
    <div>
      <p className='text-center'>{timeProp}</p>
      <img className='w-9' src={`${iconProp}`} alt='This is a weather icon'/>
      <p className='text-center'>{tempProp}</p>
    </div>
  )
}

export default HourlyForecast;
