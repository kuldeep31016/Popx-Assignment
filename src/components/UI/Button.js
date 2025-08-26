import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  disabled = false, 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const getButtonClass = () => {
    let baseClass = 'btn';
    
    if (disabled) {
      return `${baseClass} btn-disabled ${className}`;
    }
    
    switch (variant) {
      case 'secondary':
        return `${baseClass} btn-secondary ${className}`;
      case 'primary':
      default:
        return `${baseClass} btn-primary ${className}`;
    }
  };

  return (
    <button
      type={type}
      className={getButtonClass()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
