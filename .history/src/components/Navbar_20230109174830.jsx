import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div className='nDiv1'>
    <div className='nDiv2'>
    <h1 className='text-4xl'>Weather App</h1>
    </div>
    <div className='nDiv3'>
    <form className='searchBox' role="search" onSubmit={resultProp}>
        <label htmlFor='searchLocation' className='searchLabel'>Enter City Name: </label>
        <input className='searchInput' id='searchLocation' placeholder='Search' onChange={cityProp}/>
        <button className='btn btn-secondary searchButton' type="submit">Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
