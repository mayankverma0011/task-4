import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NavLink to="/"   class="nav-link active" aria-current="page" >home</NavLink>
          <NavLink to="/addstatement" class="nav-link" >Add Statements</NavLink>
          {/* <NavLink to="/table" class="nav-link" >table</NavLink> */}
          <NavLink to="/addbank" class="nav-link" >Add Bank</NavLink>
          <NavLink to="/addaccount" class="nav-link" >Add Account</NavLink>
         
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar