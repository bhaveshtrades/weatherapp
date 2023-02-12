import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp}) {
  return (
    <div className='flex justify-around w-11/12 ml-4 mb-8 dailyForecastItem'>
    <div className='text-sm text-center pt-2 md:text-lg'>
    {dateProp}
    </div>
    <img className='w-6 h-6 mt-2' src={`${imgProp}`} alt="This is a weather image" /><br />
    <div className='text-sm text-center md:text-lg'>
    {tempProp}&#176;<br />
    <span className='text-xs font-bold md:text-sm'>Temp</span>
    </div>
    <div className='text-sm text-center md:text-lg'>
    {maxTempProp}&#176;<br />
    <span className='text-xs font-bold md:text-sm'>High</span>
    </div>
    <div className='text-sm text-center md:text-lg'>
    {minTempProp}&#176;<br />
    <span className='text-xs font-bold md:text-sm'>Low</span>    
    </div>
    </div>
  )
}

export default DailyForecast;
