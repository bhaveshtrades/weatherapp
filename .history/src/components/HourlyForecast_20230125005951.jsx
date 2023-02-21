import React from 'react'

function HourlyForecast({timeProp, iconProp, tempProp}){
  return(
    <div>
      <p className='text-center'>{timeProp}</p>
      <img src={`${iconProp}`} alt='This is a weather icon' className='w-4'/>
      <p className='text-center'>{tempProp}</p>
    </div>
  )
}

export default HourlyForecast;