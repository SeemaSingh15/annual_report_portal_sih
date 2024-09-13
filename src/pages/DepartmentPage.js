import React, { useState } from 'react';
import './DepartmentPage.css';

function DepartmentPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    if (file) {
      // Add your file upload logic here
      console.log("File uploaded:", file);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="department-page">
      <h1>Department Page</h1>
      <div className="upload-section">
        <h2>Enter Your Details or Upload a File</h2>
        <form onSubmit={handleFileUpload}>
          <div className="form-group">
            <label htmlFor="file-upload">Choose file:</label>
            <input
              type="file"
              id="file-upload"
              name="file-upload"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default DepartmentPage;
