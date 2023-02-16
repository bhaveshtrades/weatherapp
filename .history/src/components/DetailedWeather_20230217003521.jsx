import React from 'react'

function DetailedWeather({maxTempProp, minTempProp, sunriseProp, windSpeedProp, rainChanceProp, sunsetProp}) {
  return (
    <div className='grid grid-cols-3 gap-x-4 mt-4 w-5/6 h-max ml-6 detailedWeatherDiv justify-items-start'>

        <div>
        <h3 className='text-center text-sm'>{maxTempProp}&#176;</h3>
        <p className='text-center text-xs'>High</p>
        </div>
        <div>
        <h3 className='text-center text-sm'>{minTempProp}&#176;</h3>
        <p className='text-center text-xs'>Low</p>
        </div> 
        <div>
        <h3 className='text-center text-sm'>{sunriseProp}</h3>
        <p className='text-center text-xs'>Sunrise</p>
        </div>
        <div>
        <h3 className='text-center text-sm'>{windSpeedProp}kph</h3>
        <p className='text-center text-xs'>Wind</p>
        </div>
        <div>
        <h3 className='text-center text-sm'>{rainChanceProp}%</h3>
        <p className='text-center text-xs'>Rain</p>
        </div>
        <div>
        <h3 className='text-center text-sm'>{sunsetProp}</h3>
        <p className='text-center text-xs'>Sunset</p>
        </div>

    </div>
  )
}

export default DetailedWeather;
