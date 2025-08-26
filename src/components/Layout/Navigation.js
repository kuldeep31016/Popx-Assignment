import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getStepInfo = () => {
    switch (location.pathname) {
      case '/welcome':
        return { current: 1, total: 4, showBack: false };
      case '/login':
        return { current: 2, total: 4, showBack: true };
      case '/register':
        return { current: 3, total: 4, showBack: true };
      case '/profile':
        return { current: 4, total: 4, showBack: true };
      default:
        return { current: 1, total: 4, showBack: false };
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/welcome');
  };

  const stepInfo = getStepInfo();

  return (
    <div className="navigation">
      <div className="nav-left">
        {stepInfo.showBack ? (
          <svg 
            className="nav-icon" 
            onClick={handleBack}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        ) : (
          <div className="nav-icon" />
        )}
      </div>
      
      <div className="nav-center">
        <span className="nav-indicator">{stepInfo.current} of {stepInfo.total}</span>
      </div>
      
      <div className="nav-right">
        <svg 
          className="nav-icon" 
          onClick={handleHome}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
    </div>
  );
};

export default Navigation;
