import React, { useState } from 'react';
import './style.css';

export default function ActionButton({
  action,
  borderRadius = "radius-md",
  color = 'primary',
  endIcon = '',
  label = 'Label',
  size = 'large',
  showShadow = false,
  startIcon = '',
  state = 'enabled', 
  variant = 'contained',
  width = 'full'
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (typeof action === 'function' && state !== 'disabled') {  
      setLoading(true);
      try {
        await action();
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`button action-button ${variant} ${borderRadius} ${size} ${width} ${color} ${showShadow ? 'shadow' : ''} ${state}`}
      disabled={state === 'disabled' || loading} 
    >
      <div className={`button-content ${loading ? 'fade-out' : 'fade-in'}`}>
        {startIcon && <i className={`fi fi-${startIcon}`}></i>}
        <span>{label}</span>
        {endIcon && <i className={`fi fi-${endIcon}`}></i>}
      </div>

      <div className={`button-spinner ${loading ? 'fade-in' : 'fade-out'}`}>
        <span className="spinner"></span>
      </div>
    </button>
  );
}
