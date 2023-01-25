import React from 'react';

function CurrentWeather({countryProp, locationProp, dayProp, dateProp, monthProp, currentIconProp, currentTempProp, currentStatusProp}){

  return(
    <div className='mt-5 ps-5'>
    <h2>{locationProp}, {countryProp}</h2>
    <h4>{dateProp} {monthProp}, {dayProp}</h4>
    <div className='flex'>
    <div className='flex'>
    <div>
    <img className='currentIcon' src={require({currentIconProp})} alt="No image Available" />
    </div>
    <div>
    <h2>{currentTempProp}</h2>
    <h4>{currentStatusProp}</h4>
    </div>
    </div>
    <div>
      
    </div>
    </div>
    </div>
  )
}

export default CurrentWeather;
