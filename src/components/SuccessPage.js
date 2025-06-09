import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return (
      <div className="success-container">
        <h2>Error</h2>
        <p>No form data available. Please fill the registration form.</p>
        <Link to="/" className="back-link">Back to Registration</Link>
      </div>
    );
  }

  return (
    <div className="success-container">
      <h2>Registration Successful!</h2>
      
      <div className="details-section">
        <h3>Personal Information</h3>
        <div className="info-group">
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>

        <h3>Contact Details</h3>
        <div className="info-group">
          <p><strong>Phone:</strong> {formData.countryCode} {formData.phoneNumber}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>City:</strong> {formData.city}</p>
        </div>

        <h3>Identity Information</h3>
        <div className="info-group">
          <p><strong>PAN Number:</strong> {formData.panNumber}</p>
          <p><strong>Aadhar Number:</strong> {formData.aadharNumber}</p>
        </div>
      </div>

      <Link to="/" className="back-link">Back to Registration</Link>
    </div>
  );
};

export default SuccessPage; 