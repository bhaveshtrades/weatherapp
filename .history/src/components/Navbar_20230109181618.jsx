import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div className='flex justify-around mt-12'>
    <div>
    <h1>Weather App</h1>
    </div>
    <div className='pt-2'>
    <form role="search" onSubmit={resultProp} className="flex gap-x-4">
        <label htmlFor='cityName'>Enter City Name: </label>
        <input type="text" className="form-control" onChange={cityProp}/>
        <button type="submit" className='btn btn-dark' onClick={resultProp}>Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
