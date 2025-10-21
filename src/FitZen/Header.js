import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container-fluid'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
    <Link  className="navbar-brand" to="/">
       <div style={{fontSize:'40px'}}>
        <strong>Fit<span className='text-danger'>Verse</span></strong>
        
        </div> 

    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/classes">Classes</Link>
        <Link className="nav-link" to="/trainers">Trainers</Link>
        <Link className="nav-link" to="/schedules">Schedule</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" style={{color:'beige',border:'1px solid black',padding:'7px 9px',backgroundColor:'grey',borderRadius:'5px'}} to="/admin">Admin Login</Link>
        
      </div>
    </div>
  </div>
</nav>


    </header>
  )
}

export default Header