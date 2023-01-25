import React from 'react'

function HourlyForecast({timeProp, iconProp, tempProp}){
  return(
    <di>
      <p className='text-center'>{timeProp}</p>
      <img src={`${iconProp}`} alt='This is a weather icon'/>
      <p className='text-center'>{tempProp}</p>
    </di>
  )
}

export default HourlyForecast;
