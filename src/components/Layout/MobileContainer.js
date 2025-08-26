import React from 'react';

const MobileContainer = ({ children }) => {
  return (
    <div className="mobile-container">
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;
