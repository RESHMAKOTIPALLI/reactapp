import React from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css'; // Ensure you create and import this CSS file

function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <h1>TravelDash</h1>
        <img src="/path/to/logo.png" alt="TravelDash Logo" className="logo" />
      </div>
      <ul className="sidenav-menu">
        <li>
          <Link to="/dashboard" className="sidenav-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/bookings" className="sidenav-link">Bookings</Link>
        </li>
        <li>
          <Link to="/trips" className="sidenav-link">My Trips</Link>
        </li>
        <li>
          <Link to="/destinations" className="sidenav-link">Destinations</Link>
        </li>
        <li>
          <Link to="/profile" className="sidenav-link">Profile</Link>
        </li>
        <li>
          <Link to="/settings" className="sidenav-link">Settings</Link>
        </li>
      </ul>
      <div className="sidenav-footer">
        <Link to="/" className="sidenav-link">Logout</Link>
      </div>
    </div>
  );
}

export default Sidenav;
