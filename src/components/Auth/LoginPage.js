import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Input from '../UI/Input';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login - in real app, you'd validate credentials
    navigate('/profile');
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="form-container">
      <h1 className="title">Signin to your PopX account</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <form onSubmit={handleLogin} className="form-content">
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        
        <Button 
          type="submit"
          variant={isFormValid ? "primary" : "disabled"}
          disabled={!isFormValid}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
