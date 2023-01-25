import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div className='flex justify-around mt-12'>
    <div>
    <h1>Weather App</h1>
    </div>
    <div className='pt-3'>
    <form role="search" onSubmit={resultProp}>
        <label className="input-group-text">Enter City Name: </label>
        <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
        <button type="submit" className='btn btn-dark'>Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
