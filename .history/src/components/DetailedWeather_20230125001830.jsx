import React from 'react'

function DetailedWeather({maxTempProp, minTempProp, sunriseProp, windSpeedProp, rainChanceProp, sunsetProp}) {
  return (
    <div className='sm:grid grid-cols-3 gap-x-4'>

        <div>
        <h3 className='text-center'>{maxTempProp}&#176;</h3>
        <p className='text-center'>High</p>
        </div>
        <div>
        <h3 className='text-center'>{minTempProp}&#176;</h3>
        <p className='text-center'>Low</p>
        </div> 
        <div>
        <h3 className='text-center'>{sunriseProp}</h3>
        <p className='text-center'>Sunrise</p>
        </div>
        <div>
        <h3 className='text-center'>{windSpeedProp}kph</h3>
        <p className='text-center'>Wind</p>
        </div>
        <div>
        <h3 className='text-center'>{rainChanceProp}%</h3>
        <p className='text-center'>Rain</p>
        </div>
        <div>
        <h3 className='text-center'>{sunsetProp}</h3>
        <p className='text-center'>Sunset</p>
        </div>

    </div>
  )
}

export default DetailedWeather;
