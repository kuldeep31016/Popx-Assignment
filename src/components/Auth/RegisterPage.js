 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Button from '../UI/Button';
import Input from '../UI/Input';
import RadioButton from '../UI/RadioButton';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useAppContext();
  
  const [localFormData, setLocalFormData] = useState({
    fullName: formData.fullName || 'Marry Doe',
    phoneNumber: formData.phoneNumber || '+91 9876543210',
    email: formData.email || 'marry@example.com',
    password: formData.password || '',
    companyName: formData.companyName || 'Example Company',
    isAgency: formData.isAgency !== null ? formData.isAgency : true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData(prev => ({
      ...prev,
      [name]: value
    }));
    updateFormData(name, value);
  };

  const handleRadioChange = (value) => {
    setLocalFormData(prev => ({
      ...prev,
      isAgency: value
    }));
    updateFormData('isAgency', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save all form data to context
    Object.keys(localFormData).forEach(key => {
      updateFormData(key, localFormData[key]);
    });
    navigate('/profile');
  };

  const isFormValid = localFormData.fullName && 
                     localFormData.phoneNumber && 
                     localFormData.email && 
                     localFormData.password &&
                     localFormData.isAgency !== null;

  const agencyOptions = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
  ];

  return (
    <div className="form-container">
      <h1 className="title">Create your PopX account</h1>
      
      <form onSubmit={handleSubmit} className="form-content">
        <Input
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          value={localFormData.fullName}
          onChange={handleInputChange}
          required
        />
        
        <Input
          label="Phone number"
          name="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          value={localFormData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={localFormData.email}
          onChange={handleInputChange}
          required
        />
        
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Create a password"
          value={localFormData.password}
          onChange={handleInputChange}
          required
        />
        
        <Input
          label="Company name"
          name="companyName"
          placeholder="Enter company name (optional)"
          value={localFormData.companyName}
          onChange={handleInputChange}
        />
        
        <RadioButton
          label="Are you an Agency?"
          name="isAgency"
          options={agencyOptions}
          selectedValue={localFormData.isAgency}
          onChange={handleRadioChange}
        />
        
        <Button 
          type="submit"
          variant={isFormValid ? "primary" : "disabled"}
          disabled={!isFormValid}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
