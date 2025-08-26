import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="form-container">
      <div className="welcome-circles">
        <div className="circle">1</div>
        <div className="circle">2</div>
      </div>
      
      <h1 className="title">Welcome to PopX</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="form-content">
        <Button 
          variant="primary" 
          onClick={handleCreateAccount}
        >
          Create Account
        </Button>
        
        <Button 
          variant="secondary" 
          onClick={handleLogin}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
