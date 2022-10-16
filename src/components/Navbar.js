import React from 'react'
import {Link, Outlet} from "react-router-dom";
export default function navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <span className="navbar-brand mb-0 h1">{props.brand}</span> 
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" style={{flexGrow: 0}} id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <Outlet/>
    </>
  )
}
