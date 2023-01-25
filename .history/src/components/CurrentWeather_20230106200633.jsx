import React from 'react';

function Current_weather({cityHeadProp, dayProp, dateProp}) {

  return (
    <div>
    <h2>{cityHeadProp}</h2>
    <h3>{dayProp}, {dateProp}</h3>
    </div>
  )
}

export default Current_weather;
