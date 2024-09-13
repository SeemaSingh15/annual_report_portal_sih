import React from 'react';
import { Link } from 'react-router-dom';
// Assuming you have styles here

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">Annual Report Portal</div>
        <nav className="header-nav">
          <Link to="/login">Login</Link>
          <Link to="/reportview">ReportView</Link>
          <Link to="/about">About</Link>
          <Link to="/logout">Logout</Link> {/* Added Logout link */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
