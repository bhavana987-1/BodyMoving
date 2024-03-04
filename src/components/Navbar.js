import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DataTable from './DataTable';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="http://localhost:3000\TOPlogo.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            {' '}
            BODY MOVING
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item mx-2 ${location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className={`nav-item mx-2 ${location.pathname === '/workout' ? 'active' : ''}`}>
                <Link className="nav-link" to="/workout">Workout</Link>
              </li>
              <li className={`nav-item mx-2 ${location.pathname === '/diet' ? 'active' : ''}`}>
                <Link className="nav-link" to="/diet">Diet</Link>
              </li>
              <li className={`nav-item mx-2 ${location.pathname === '/Signup' ? 'active' : ''}`}>
                <Link className="nav-link" to="/register">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

      <DataTable />
    </div>
  );
}






