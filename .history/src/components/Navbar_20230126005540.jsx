import React from 'react';

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div className='md:flex justify-around'>
    <h1 className='text-slate-50 font-bold text-2xl mt-12 pl-8 '>Weather App</h1>
    <div className='flex justify-around pl-4 mt-12'>
    <form role="search" onSubmit={resultProp} className='flex gap-x-2'>
        <label htmlFor='cityName' className='text-slate-50 font-bold text-xs mt-2'>Enter City:</label>
        <input type='text' className='text-center w-44 h-8' placeholder='Search' onChange={cityProp} id='cityName'/>
        <button type="submit" className='bg-black text-slate-50 text-center w-16 h-8' onClick={resultProp}>Search</button>
    </form>
    </div>
    </div>
    
    </>
  )
}

export default Navbar;
