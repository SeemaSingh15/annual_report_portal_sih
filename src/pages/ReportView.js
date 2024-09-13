import React, { useState } from 'react';
import './ReportView.css';

function ReportView() {
  const [selectedCollege, setSelectedCollege] = useState('');

  return (
    <div className="report-view">
      <h1>Annual Report View</h1>
      <div className="report-form">
        <label htmlFor="college">Select College:</label>
        <select
          id="college"
          name="college"
          value={selectedCollege}
          onChange={(e) => setSelectedCollege(e.target.value)}
        >
          <option value="">--Select--</option>
          <option value="college1">College 1</option>
          <option value="college2">College 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
}

export default ReportView;
