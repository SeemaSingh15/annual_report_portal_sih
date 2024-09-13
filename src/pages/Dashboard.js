import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="grid-container">
        <div className="grid-item">
          <h2>ECE Dept</h2>
          <Link to="/department/ece">Enter Details</Link>
        </div>
        <div className="grid-item">
          <h2>Placement Dept</h2>
          <Link to="/department/placement">Enter Details</Link>
        </div>
        <div className="grid-item add-box">
          <h2>+</h2>
          <p>Add New Department</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
