import React from 'react';

const RadioButton = ({ 
  options, 
  name, 
  selectedValue, 
  onChange, 
  label 
}) => {
  return (
    <div className="radio-group">
      {label && (
        <label className="input-label required">
          {label}
        </label>
      )}
      {options.map((option) => (
        <div 
          key={option.value} 
          className="radio-option"
          onClick={() => onChange(option.value)}
        >
          <div className={`radio-input ${selectedValue === option.value ? 'checked' : ''}`} />
          <span className="radio-label">{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
