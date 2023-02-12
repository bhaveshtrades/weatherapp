import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp}) {
  return (
    <div className='flex justify-around w-6/7 ml-8 mb-8 dailyForecastItem'>
    <div className='text-base text-center pt-2 md:text-lg'>
    {dateProp}
    </div>
    <img className='w-6 h-6 mt-2' src={`${imgProp}`} alt="This is a weather image" /><br />
    <div className='text-sm text-center md:text-lg'>
    {tempProp}&#176;<br />
    <span className='text-xs md:text-sm'>Temp</span>
    </div>
    <div className='text-sm text-center md:text-lg'>
    {maxTempProp}&#176;<br />
    <span className='text-xs md:text-sm'>High</span>
    </div>
    <div className='text-sm text-center md:text-lg'>
    {minTempProp}&#176;<br />
    <span className='text-xs md:text-sm'>Low</span>    
    </div>
    </div>
  )
}

export default DailyForecast;
