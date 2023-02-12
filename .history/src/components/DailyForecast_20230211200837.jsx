import React from 'react'

function DailyForecast({dateProp, imgProp, maxTempProp, tempProp, minTempProp}) {
  return (
    <div className='flex justify-around mt-4 w-4/5'>
    <div className='text-base text-center'>
    {dateProp}
    </div>
    <img className='w-6 h-6' src={`${imgProp}`} alt="This is a weather image" />
    <div className='text-base text-center'>
    {tempProp}&#176;<br />
    <span className='text-xs'>Temp</span>
    </div>
    <div className='text-base text-center md:text-base'>
    {maxTempProp}&#176;<br />
    <span className='text-xs'>High</span>
    </div>
    <div className='text-base text-center md:text-base'>
    {minTempProp}&#176;<br />
    <span className='text-xs'>Low</span>    
    </div>
    </div>
  )
}

export default DailyForecast;
