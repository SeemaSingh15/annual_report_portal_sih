// src/pages/Reports.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from an API
    axios.get('https://api.example.com/reports')
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Annual Reports</h2>
      <div className="list-group">
        {reports.map(report => (
          <a href={report.url} key={report.id} className="list-group-item list-group-item-action">
            {report.title} - {report.year}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Reports;
