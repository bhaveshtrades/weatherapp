import React from 'react';

function Navbar({resultProp, cityProp}){

  return (
    <>
    <h1 className='text-slate-50 font-bold text-2xl mt-12 pl-8'>Weather App</h1>
    <div className='flex justify-around pl-4 mt-12'>
    <form role="search" onSubmit={resultProp} className='flex gap-x-2'>
        <label htmlFor='cityName' className='text-slate-50 font-bold text-xs mt-2'>Enter City:</label>
        <input type='text' className='text-center w-44 h-8' placeholder='Search' onChange={cityProp} id='cityName'/>
        <button type="submit" className='btn btn-dark w-16 h-8 text-center text-sm' onClick={resultProp}>Search</button>
    </form>
    </div>
    </>
  )
}

export default Navbar;
