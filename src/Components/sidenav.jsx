import React from 'react';
import { Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <h1>Electronics</h1>
        <img src="Rapunzel.jpg" alt="Electronics Logo" className="logo" />
      </div>
      <ul className="sidenav-menu">
        <li>
          <Link to="/dashboard" className="sidenav-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/headphones" className="sidenav-link">Headphones</Link>
        </li>
        <li>
          <Link to="/cameras" className="sidenav-link">Cameras</Link>
        </li>
        <li>
          <Link to="/laptops" className="sidenav-link">Laptops</Link>
        </li>
        <li>
          <Link to="/profile" className="sidenav-link">Profile</Link>
        </li>
      
      </ul>
      <div className="sidenav-footer">
        <Link to="/" className="sidenav-link">Logout</Link>
      </div>
    </div>
  );
}

export default Sidenav;

