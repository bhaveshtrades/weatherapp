import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp}) {
  return (
    <div className='flex justify-around mt-4'>
    <div className='text-xs md:text-base'>
    {dateProp}
    </div>
    <img className='w-6 h-6' src={`${imgProp}`} alt="This is a weather image" />
    <div className='text-xs md:text-base'>
    {tempProp}&#176;<br />
    <span>Temp</span>
    </div>
    <div className='text-xs md:text-base'>
    {maxTempProp}&#176;<br />
    <span>High</span>
    </div>
    <div className='text-xs md:text-base'>
    {minTempProp}&#176;<br />
    <span>Low</span>    
    </div>
    </div>
  )
}

export default DailyForecast;
