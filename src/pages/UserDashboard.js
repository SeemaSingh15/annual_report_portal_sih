// src/pages/UserDashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../services/AuthContext';

function UserDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome, {user ? user.username : 'Guest'}!</p>
    </div>
  );
}

export default UserDashboard;
