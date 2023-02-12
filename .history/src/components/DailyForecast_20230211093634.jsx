import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, minTempProp, windSpeedProp}) {
  return (
    <div className='flex'>
    <div>
    {dateProp}
    </div>
    <div>
    <img src={`${imgProp}`} alt="This is a weather image" />
    </div>
    <div>
    {maxTempProp}
    </div>
    <div>
    {minTempProp}    
    </div>
    <div>
    {windSpeedProp}    
    </div>
    </div>
  )
}

export default DailyForecast
