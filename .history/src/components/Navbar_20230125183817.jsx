import React from 'react';

function Navbar({resultProp, cityProp}){

  return (
    <>
    <h1 className='text-slate-50 font-bold text-lg mt-16 ml-8'>Weather App</h1>
    <div className='flex justify-around ml-20 mt-12'>
    <div className='pt-2'>
    <form role="search" onSubmit={resultProp} className='flex gap-x-4'>
        <label htmlFor='cityName' className='pt-2 text-slate-50 font-bold'>Enter City: </label>
        <input type='text' className='text-center' placeholder='Enter City Name' onChange={cityProp} id='cityName'/>
        <button type="submit" className='btn btn-dark' onClick={resultProp}>Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
