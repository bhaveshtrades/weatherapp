import React from 'react';

function CurrentWeather({countryProp, locationProp, dayProp, dateProp, monthProp, currentIconProp, currentTempProp, currentStatusProp}){

  return(
    <div className='cDiv1'>
    <h2>{locationProp}, {countryProp}</h2>
    <h4>{dateProp} {monthProp}, {dayProp}</h4>
    <div className='cDiv2'>

    <div className='cDiv3'>
    <div className='cDiv4'>
    <img className='currentIcon' src={`${currentIconProp}`} alt='This is a weather Icon'/>
    </div>
    <div className='cDiv5'>
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
