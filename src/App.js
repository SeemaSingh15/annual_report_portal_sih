import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Import pages
import About from './pages/About';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Report from './pages/Report';
import ReportView from './pages/ReportView';
import UserDashboard from './pages/UserDashboard';

// Import components
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

// Import context (if used)
import AuthContextProvider from './services/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/ReportView" element={<ReportView />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />
            {/* Add more routes if needed */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
