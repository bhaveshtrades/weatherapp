import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div className='sm:flex justify-around mt-12'>
    <div>
    <h1>Weather App</h1>
    </div>
    <div className='sm:pt-2'>
    <form role="search" onSubmit={resultProp} className='sm:flex gap-x-4'>
        <label htmlFor='cityName' className='sm:pt-2'>Enter City: </label>
        <input type='text' className='sm:text-center' placeholder='Enter City Name' onChange={cityProp}/>
        <button type="submit" className='sm:btn btn-dark' onClick={resultProp}>Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
