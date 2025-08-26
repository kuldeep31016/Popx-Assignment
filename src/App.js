import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import MobileContainer from './components/Layout/MobileContainer';
import WelcomePage from './components/Welcome/WelcomePage';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import AccountSettings from './components/Profile/AccountSettings';
import './styles/globals.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <MobileContainer>
            <Routes>
              <Route path="/" element={<Navigate to="/welcome" replace />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<AccountSettings />} />
            </Routes>
          </MobileContainer>
        </div>
      </Router>
    </AppProvider>
  );
  
}

export default App;
