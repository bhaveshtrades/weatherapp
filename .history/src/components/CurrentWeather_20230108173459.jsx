import React from 'react';

function CurrentWeather({locationProp, dayProp, dateProp, monthProp}){

  return (
    
    <div className='mt-5 ps-5'>
    <h2>{locationProp}</h2>
    <h3>{dateProp} {monthProp}, {dayProp}</h3>
    </div>
    
  )
}

export default CurrentWeather;
