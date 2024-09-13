import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Import pages
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard'; // Updated import
import Home from './pages/Home';
import Login from './pages/Login';
import Reports from './pages/Reports'; // Updated import
import ReportView from './pages/ReportView';
import UserDashboard from './pages/UserDashboard';

// Import components
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

// Import context
import { AuthProvider } from './services/AuthContext'; // Updated import

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/report" element={<Reports />} />
            <Route path="/reportview" element={<ReportView />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            {/* Add more routes if needed */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
