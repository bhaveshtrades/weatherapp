import React from 'react'

function DetailedWeather({maxTempProp, minTempProp, sunriseProp, windSpeedProp, rainChanceProp, sunsetProp}) {
  return (
    <div className='flex flex-wrap'>

        <div>
        <h3>{maxTempProp}</h3>
        <p>High</p>
        </div>
        <div>
        <h3>{minTempProp}</h3>
        <p>Low</p>
        </div> 
        <div>
        <h3>{sunriseProp}</h3>
        <p>Sunrise</p>
        </div>
        <div>
        <h3>{windSpeedProp}</h3>
        <p>Wind</p>
        </div>
        <div>
        <h3>{rainChanceProp}%</h3>
        <p>Rain</p>
        </div>
        <div>
        <h3>{sunsetProp}</h3>
        <p>Sunset</p>
        </div>

    </div>
  )
}

export default DetailedWeather
