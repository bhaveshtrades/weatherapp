import React from 'react';

function CurrentWeather({locationProp, dayProp, dateProp}){

  return (
    
    <div className='mt-3'>
    <h2>{locationProp}</h2>
    <h3>{dayProp}, {dateProp}</h3>
    </div>
    
  )
}

export default CurrentWeather;
