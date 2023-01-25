import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <div className="collapse navbar-collapse flex" id="navbarSupportedContent">
    <form className="d-flex" role="search" onSubmit={resultProp}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={cityProp}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;
