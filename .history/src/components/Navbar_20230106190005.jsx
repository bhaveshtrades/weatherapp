import React, { useState } from 'react'

function Navbar() {

    const[search, setSearch] = useState();

    const[city, setCity] = useState();

    const apiKey = process.env.REACT_APP_API_KEY;

    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const getWeather = ()=>{
        setCity(search);
        fetch(currentAPI).then(data => data.json())
        .then(response => console.log(response));
    }

    

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit" onClick={getWeather}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
