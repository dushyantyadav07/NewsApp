import React, { Component } from 'react'
import "./background.css"
 import { Link } from 'react-router-dom'
 
 

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-danger text-light sticky-top sticky-top my-2">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to ="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to ="/">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to ="/Politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to ="/Crime">Crime</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to ="/Education">Education</Link>
        </li>
        <li className="nav-item dropdown me-5 ">
          <Link className="nav-link dropdown-toggle text-light" to ="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </Link>
          <ul className="dropdown-menu text-warning">
            <li><Link className="dropdown-item text-warning" to ="/Science">Science</Link></li>
            <li><Link className="dropdown-item text-warning" to ="/Technology">Technology</Link></li>
            <li><Link className="dropdown-item text-warning" to ="/Game">Games</Link></li>
            <li><Link className="dropdown-item text-warning" to ="/Cricket">Cricket</Link></li>
            <li><Link className="dropdown-item text-warning" to ="/FIFA">FIFA</Link></li>
            <li><Link className="dropdown-item text-warning" to ="/World">World</Link></li>
            <li><Link className="dropdown-item text-warning" to ="/India">India</Link></li>
            <li><Link className="dropdown-item text-warning" to ="/Jokes">Jokes</Link></li>
            <li><Link className="dropdown-item text-warning" to ="/ Covid">Covid</Link></li>
          </ul>
        </li>
      </ul>
      <form className ="d-flex w-100" role="search">
        <input className ="form-control me-3 " type="search" placeholder="Search" aria-label="Search" />
        <button className ="btn btn-outline-warning me-" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }
}
