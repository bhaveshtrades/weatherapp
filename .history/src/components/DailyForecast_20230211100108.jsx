import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp}) {
  return (
    <div className='flex justify-around mt-4'>
    <div>
    {dateProp}
    </div>
    <img className='w-8 h-8' src={`${imgProp}`} alt="This is a weather image" />
    <div>
    {tempProp}&#176;
    </div>
    <div>
    {maxTempProp}&#176;
    </div>
    <div>
    {minTempProp}&#176;    
    </div>
    </div>
  )
}

export default DailyForecast
