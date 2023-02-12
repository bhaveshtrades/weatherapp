import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp}) {
  return (
    <div className='flex justify-center mt-4'>
    <div className='text-sm'>
    {dateProp}
    </div>
    <img className='w-8 h-8' src={`${imgProp}`} alt="This is a weather image" />
    <div className='text-sm'>
    {tempProp}&#176;
    </div>
    <div className='text-sm'>
    {maxTempProp}&#176;
    </div>
    <div className='text-sm'>
    {minTempProp}&#176;    
    </div>
    </div>
  )
}

export default DailyForecast;
