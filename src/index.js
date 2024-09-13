import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure global styles are included
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
