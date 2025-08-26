import React from 'react';
import { useAppContext } from '../../context/AppContext';

const AccountSettings = () => {
  const { formData } = useAppContext();

  // Default profile data if no form data exists
  const profileData = {
    name: formData.fullName || 'Marry Doe',
    email: formData.email || 'Marry@Gmail.Com'
  };

  // Professional person image
  const profileImageUrl = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';

  return (
    <div className="form-container">
      <h1 className="title">Account Settings</h1>
      
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src={profileImageUrl} 
            alt="Profile" 
            className="profile-image"
            onError={(e) => {
              e.target.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#7C3AED"/>
                  <circle cx="40" cy="32" r="12" fill="white"/>
                  <path d="M20 65C20 55 29 47 40 47C51 47 60 55 60 65" stroke="white" stroke-width="8" stroke-linecap="round"/>
                </svg>
              `)}`;
            }}
          />
          <div className="camera-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 5.89543 2.89543 5 4 5H6.58579C6.851 5 7.10536 4.89464 7.29289 4.70711L8.70711 3.29289C8.89464 3.10536 9.149 3 9.41421 3H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L16.7071 4.70711C16.8946 4.89464 17.149 5 17.4142 5H20C21.1046 5 22 5.89543 22 7V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V7ZM7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12Z"/>
            </svg>
          </div>
        </div>
        
        <div className="profile-info">
          <div className="profile-name">{profileData.name}</div>
          <div className="profile-email">{profileData.email}</div>
        </div>
      </div>
      
      <div className="form-content">
        <p className="subtitle" style={{ textAlign: 'left', marginBottom: '24px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        {formData.fullName && (
          <div style={{ 
            backgroundColor: '#F3F4F6', 
            padding: '16px', 
            borderRadius: '8px',
            marginTop: '20px'
          }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#374151' }}>
              Registered Information:
            </h3>
            <div style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phoneNumber}</p>
              {formData.companyName && <p><strong>Company:</strong> {formData.companyName}</p>}
              <p><strong>Agency:</strong> {formData.isAgency ? 'Yes' : 'No'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
