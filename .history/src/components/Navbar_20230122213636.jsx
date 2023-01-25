import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div className='flex justify-around mt-12'>
    <div>
    <h1>Weather App</h1>
    </div>
    <div className='pt-2'>
    <form role="search" onSubmit={resultProp} className='flex gap-x-4 bg-orange-400'>
        <label htmlFor='cityName' className='pt-2'>Enter City: </label>
        <input type='text' className='text-center' placeholder='Enter City Name' onChange={cityProp}/>
        <button type="submit" className='btn btn-dark' onClick={resultProp}>Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
