import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp, windSpeedProp}) {
  return (
    <div className='flex justify-around mt-4'>
    <div>
    {dateProp}
    </div>
    <img className='w-8 h-8' src={`${imgProp}`} alt="This is a weather image" />
    <div>
    {tempProp}
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
