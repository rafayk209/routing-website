import {  Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link, Switch, Route, Redirect } from "react-router-dom"

function Navbr() {
  return (
    <>
      <div>
        {/* <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

            </div>
          </div>
        </div> */}
        <div className="container-fluid nav_bg navbar-light bg-light">
          <div className="row">
            <div className="col-10 mx-auto">


            <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Practice">Practice</Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default Navbr;
