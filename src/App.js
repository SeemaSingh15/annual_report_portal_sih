import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DepartmentPage from './pages/DepartmentPage';
import ReportView from './pages/ReportView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/report-view" element={<ReportView />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
