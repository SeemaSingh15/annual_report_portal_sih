import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Annual Report Portal</h1>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/report-view">Report View</Link>
      </div>
    </nav>
  );
}

export default Navbar;
