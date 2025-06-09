import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { countries } from '../data/locations';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    countryCode: '+91',
    phoneNumber: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [cities, setCities] = useState([]);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // First Name validation
    if (!formData.firstName.trim()) {
      tempErrors.firstName = 'First name is required';
      isValid = false;
    } else if (!/^[A-Za-z]{2,}$/.test(formData.firstName)) {
      tempErrors.firstName = 'Enter valid first name';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      tempErrors.lastName = 'Last name is required';
      isValid = false;
    } else if (!/^[A-Za-z]{2,}$/.test(formData.lastName)) {
      tempErrors.lastName = 'Enter valid last name';
      isValid = false;
    }

    // Username validation
    if (!formData.username.trim()) {
      tempErrors.username = 'Username is required';
      isValid = false;
    } else if (!/^[A-Za-z0-9_]{4,}$/.test(formData.username)) {
      tempErrors.username = 'Username must be at least 4 characters';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Enter valid email';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    // Phone validation
    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = 'Enter valid 10-digit number';
      isValid = false;
    }

    // Country validation
    if (!formData.country) {
      tempErrors.country = 'Please select country';
      isValid = false;
    }

    // City validation
    if (!formData.city) {
      tempErrors.city = 'Please select city';
      isValid = false;
    }

    // PAN validation
    if (!formData.panNumber) {
      tempErrors.panNumber = 'PAN number is required';
      isValid = false;
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panNumber)) {
      tempErrors.panNumber = 'Enter valid PAN number';
      isValid = false;
    }

    // Aadhar validation
    if (!formData.aadharNumber) {
      tempErrors.aadharNumber = 'Aadhar number is required';
      isValid = false;
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      tempErrors.aadharNumber = 'Enter valid 12-digit Aadhar number';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'country') {
      const selectedCountry = countries.find(c => c.code === value);
      setCities(selectedCountry ? selectedCountry.cities : []);
      setFormData(prev => ({ ...prev, city: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-text">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="show-password"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <div className="phone-input">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? 'error' : ''}
            />
          </div>
          {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={errors.country ? 'error' : ''}
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && <span className="error-text">{errors.country}</span>}
        </div>

        <div className="form-group">
          <label>City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={errors.city ? 'error' : ''}
            disabled={!formData.country}
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <span className="error-text">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label>PAN Number:</label>
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            className={errors.panNumber ? 'error' : ''}
            placeholder="ABCDE1234F"
          />
          {errors.panNumber && <span className="error-text">{errors.panNumber}</span>}
        </div>

        <div className="form-group">
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            className={errors.aadharNumber ? 'error' : ''}
            placeholder="123456789012"
          />
          {errors.aadharNumber && <span className="error-text">{errors.aadharNumber}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm; 