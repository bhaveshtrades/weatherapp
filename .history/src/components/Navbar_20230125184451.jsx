import React from 'react';

function Navbar({resultProp, cityProp}){

  return (
    <>
    <h1 className='text-slate-50 font-bold text-lg mt-16 pl-4'>Weather App</h1>
    <div className='flex justify-around pl-12 mt-12'>
    <form role="search" onSubmit={resultProp} className='flex gap-x-4'>
        <label htmlFor='cityName' className='text-slate-50 font-bold text-sm'>Enter City: </label>
        <input type='text' className='text-center' placeholder='Enter City Name' onChange={cityProp} id='cityName'/>
        <button type="submit" className='btn btn-dark' onClick={resultProp}>Search</button>
    </form>
    </div>
    </>
  )
}

export default Navbar;
