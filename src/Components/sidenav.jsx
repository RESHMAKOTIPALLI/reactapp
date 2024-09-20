import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../Assets/Rapunzel.jpg'; 



function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <h1>Electronics</h1>
        <img src={logo} alt="Electronics Logo" className="logo" />
      </div>
      <ul className="sidenav-menu">
        <li>
          <Link to="/dashboard" className="sidenav-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/headphone" className="sidenav-link">Headphones</Link>
        </li>
        <li>
          <Link to="/camera" className="sidenav-link">Cameras</Link>
        </li>
        <li>
          <Link to="/laptop" className="sidenav-link">Laptops</Link>
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
