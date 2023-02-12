import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, minTempProp, windSpeedProp}) {
  return (
    <div className='flex'>
    <div>
    {dateProp}
    </div>
    <div>
    {imgProp}
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
