import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp}) {
  return (
    <div className='flex justify-around mt-4'>
    <div className='text-sm'>
    {dateProp}
    </div>
    <img className='w-8 h-8' src={`${imgProp}`} alt="This is a weather image" />
    <div className='text-base'>
    {tempProp}&#176;
    </div>
    <div className='text-base'>
    {maxTempProp}&#176;
    </div>
    <div className='text-base'>
    {minTempProp}&#176;    
    </div>
    </div>
  )
}

export default DailyForecast;
