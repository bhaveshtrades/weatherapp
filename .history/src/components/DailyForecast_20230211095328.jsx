import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp, windSpeedProp}) {
  return (
    <div className='flex justify-around mt-4'>
    <div>
    {dateProp}
    </div>
    <div>
    <img src={`${imgProp}`} alt="This is a weather image" />
    </div>
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
