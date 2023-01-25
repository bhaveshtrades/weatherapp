import React from 'react';

function CurrentWeather({countryProp, locationProp, dayProp, dateProp, monthProp}){

  return (
    
    <div className='mt-5 ps-5'>
    <h2>{locationProp}, {countryProp}</h2>
    <h4>{dateProp} {monthProp}, {dayProp}</h4>
    </div>
    
  )
}

export default CurrentWeather;
