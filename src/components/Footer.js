import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Footer(props) {
  return (
    <footer className="d-flex flex-wrap mt-5 align-items-center py-3 border-top">
    <div className="col-md-4 container d-flex justify-content-between align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 lh-1"> {props.brand} </a>
      <span className="mb-3 mb-md-0">© 2022 Company, Inc</span>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className href="#"> <i className="fa-brands fa-facebook" /> </a>
        </li>
        <li className="ms-3">
          <a className href="#"> <i className="fa-brands fa-instagram" /> </a>
        </li>
        <li className="ms-3">
          <a className href="#"> <i className="fa-brands fa-twitter" /> </a>
        </li>
      </ul>
    </div>
  </footer>
  )
}

